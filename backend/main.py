import uvicorn 
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import os

import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

print("Current working directory:", os.getcwd())
df = pd.read_csv('./data/df_cleaned.csv')

feature_columns = [
    "likes/views", "media_type", "platform", "likes_numeric",
    "has_hashtags", "time_of_day", "week_day", "is_weekend",
    "caption_length", "cost_of_advertisement", "engagement_ratio"
]

X = df[feature_columns]
y = df['is_viral']

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y, test_size=0.2, random_state=42
)

# random forest
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)
rf_preds = rf.predict(X_test)
print("🔍 Random Forest Classification Report:")
print(classification_report(y_test, rf_preds))

# lr
lr = LogisticRegression(max_iter=1000)
lr.fit(X_train, y_train)
lr_preds = lr.predict(X_test)
print("🔍 Logistic Regression Classification Report:")
print(classification_report(y_test, lr_preds))


model = rf  

class InputData(BaseModel):
    features: List[float]  

@app.post("/predict")
def predict(data: InputData):
    if len(data.features) != len(feature_columns):
        return {
            "error": f"Expected {len(feature_columns)} features: {feature_columns}"
        }

    input_scaled = scaler.transform([data.features])
    
    rf_prediction = rf.predict(input_scaled)
    rf_prob = rf.predict_proba(input_scaled)[0][1] 

    lr_prediction = lr.predict(input_scaled)
    lr_prob = lr.predict_proba(input_scaled)[0][1]

    return {
        "random_forest_prediction": int(rf_prediction[0]),
        "random_forest_probability": round(rf_prob, 3),
        "logistic_regression_prediction": int(lr_prediction[0]),
        "logistic_regression_probability": round(lr_prob, 3)
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)