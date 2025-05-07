import ItemList from "../Components/ItemList";
import ItemForm from "../Components/ItemForm";


export function Items() {
    return (
        <>
            <div>
                <h1>Items</h1>
                <ItemForm />
                <ItemList />
            </div>
        </>
    );
}