import React from "react";

interface ItemProps {
    item: {
        images: [],
        title: string,
        id: "",
    },
    setItem: React.Dispatch<React.SetStateAction<{
        images: [],
        title: string,
        id: "",
    }>>,
};

const Sidebar: React.FC<ItemProps> = ({ item, setItem }) => {

    return (
        <div className="sidebar">
            <div className="images">
                {
                    item.images.length < 1 ? (
                        <div className="image"></div>
                    ) : (
                        <div className="image"></div>
                    )
                }
            </div>
        </div>
    );
}

export default Sidebar;