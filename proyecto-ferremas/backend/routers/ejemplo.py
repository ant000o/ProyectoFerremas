from fastapi import APIRouter
from models import Item
from database import get_connection

router = APIRouter()

@router.get("/items")
def get_items():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM items")
    result = cursor.fetchall()
    cursor.close()
    conn.close()
    return result

@router.post("/items")
def create_item(item: Item):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO items (nombre, descripcion) VALUES (%s, %s)", (item.nombre, item.descripcion))
    conn.commit()
    cursor.close()
    conn.close()
    return {"msg": "Item creado correctamente"}
