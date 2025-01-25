import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";

interface ItemProps {
    images: [];
    id: "";
    title: string;
}


const Item: React.FC = () => {
    const [item, setItem] = useState<ItemProps>({
        images: [],
        id: "",
        title: "",
    });

    return (
        <div className="item">
            <Sidebar item={item} setItem={setItem} />
        </div>
    );
}

export default Item;