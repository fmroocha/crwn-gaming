import React from "react";

import "./shop.styles.css";
import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class Shop extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop">
                {collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))}
            </div>
        );
    }
}

export default Shop;
