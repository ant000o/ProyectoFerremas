from fastapi import FastAPI
from routers import ejemplo
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS para conectar con React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ejemplo.router)


@app.get("/")
def root():
    return {"message": "API funcionando correctamente"}
