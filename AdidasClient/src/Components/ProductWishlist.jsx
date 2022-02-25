import "./ProductWishlist.css"

export const ProductWishlist = () => {
    return (
        <div>
            <div className="nac_wish_left">
                <h1 className="nac_wishhead">MY WISHLIST</h1>
                <p>0 ITEMS</p>
                <p>You haven't saved any items to your wishlist yet. Start shopping and add your favorite items to your wishlist.</p>
            </div>
            <div className="nac_wish_right">
                <h2 className="nac_wishhead">NEED HELP?</h2>
                <ul className="nac_wright_a">
                    <li><a href="">Products</a></li>
                    <li><a href="">Ordering & Payments</a></li>
                    <li><a href="">Delivery</a></li>
                    <li><a href="">Promotions & Vouchers</a></li>
                    <li><a href="">Return & Refund</a></li>
                    <li><a href="">Account & Newsletter</a></li>
                    <li><a href="">Company information</a></li>
                </ul>
            </div>
        </div>
    )
}