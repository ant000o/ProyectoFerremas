from pydantic import BaseModel

class Item(BaseModel):
    id: int | None = None
    nombre: str
    descripcion: str
