import { useState } from "react";

export default function LikeButton() {

    let [isLiked, setIsLiked] = useState()

    let toggleLike = () => {
        setIsLiked(!isLiked)
    }
    let likeStyle = {color:"red"}
    return (
        <div>
            <p onClick={toggleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={likeStyle}></i>

                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    );
}