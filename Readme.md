<h1>StockSage Tool</h1>

<h2>Introduction</h2>
<br />

```
The StockSage Tool is a web application that helps retailers make informed purchasing decisions using AI-driven insights. It provides a user-friendly interface for uploading and analyzing retail data to identify top-selling items and their predicted quantities. The tool is designed to simplify inventory management and improve business operations.
```
<h2>Features</h2>
<br />

```
Data Upload: Users can upload their retail data in CSV format. The tool processes this data for analysis.

AI-Driven Analysis: Utilizes machine learning to analyze the uploaded data and predict the top-selling items and revenue.

Top-Selling Items: Provides a list of the top-selling items and their predicted quantities.

Top-Selling Items Predicted Revenue: Provides a list of the top-selling items with their predicted revenue.

User Authentication: Secure user login and registration system.
```
<h2>Getting Started</h2>

```
Prerequisites
Before running the application, ensure that you have the following dependencies installed:

Node.js
npm or yarn
Python (for the backend model)
Firebase Account (for user authentication)
Installation
Clone this repository to your local machine.

Frontend Setup:

Navigate to the frontend directory.
Run npm install or yarn install to install the frontend dependencies.
Create a Firebase project and set up the necessary configuration in frontend/src/firebase/firebase.js.
Backend Setup:

Navigate to the backend directory.
Create a Python virtual environment and install the required packages using pip install -r requirements.txt.
Usage
Frontend:

In the frontend directory, run the development server: npm run dev or yarn dev.
Access the web application in your browser.
Backend:

In the backend directory, run the FastAPI backend server using uvicorn main:app --host 0.0.0.0 --port 8000.
Model Training
The AI model is trained using the model.py script. This script loads a dataset, preprocesses it, and trains an XGBoost model to make predictions. Model training results and top-selling items are printed to the console.

To train the model:

Navigate to the backend directory.
Run the model training script using python main.py.
Improvements
Here are some suggestions to enhance the project:
```

<h2>Technology used:</h2>

<div style="display:flex ">
<img height="50" src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" alt="FastAPI">
<img height="50" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png">
<img height="50" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png">
</div>


<h2>Preview</h2>
<img src="https://github.com/VedantVatsa/stocksage/blob/main/img/Home.png">
<img src="https://github.com/VedantVatsa/stocksage/blob/main/img/Login.png">
<img src="https://github.com/VedantVatsa/stocksage/blob/main/img/Register.png">
<img src="https://github.com/VedantVatsa/stocksage/blob/main/img/About.png">
<img src="https://github.com/VedantVatsa/stocksage/blob/main/img/Main.png">
<img src="https://github.com/VedantVatsa/stocksage/blob/main/img/Prediction.png">

```
1.Clone This Repo
2.cd into frontend folder
  - cd frontend
2.Run This Command
->npm init
->npm install --Will Install All Dependencies
->npm run dev --Will Run Your Frontend on Your Local Server

3.Cd into backend folder
  -cd backend
4.Run This Command
-> pip install fastapi pandas joblib xgboost scikit-learn uvicorn python-multipart
  This Command install required library
-> run this command to run server : uvicorn main1:app --reload
```
