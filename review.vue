<template>
    <div class="review" :id="id">
        <div class="profile">
            <div class="profile-details">
                <a href="#" class="profile-pic">
                    <img alt="image" height="50px" width="50px" :src="rev.profile.img" loading="lazy">
                </a>
                <div class="profile-name">
                    <a href="#"><p>{{ rev.profile.name }}</p></a>
                    <div class="profile-stats">
                        <span class="profile-rev-fol">{{ rev.profile.numReviews }} reviews</span>
                        <span class="profile-rev-fol followers">{{ rev.profile.numFollowers }} Followers</span>
                    </div>
                </div>
            </div>
            <button class="follow-button" role="button" tabindex="0" aria-disabled="false">
                <span>Follow</span>
            </button>
        </div>
        <div class="review-rating">
            <div class="stars-and-number">
                <div class="review-stars">
                    <div class="review-star">
                        <i size="16" color="#1C1C1C"><svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C"
                                width="16" height="16" viewBox="0 0 20 20"
                                aria-labelledby="icon-svg-title-StarBox icon-svg-desc-StarBox" role="img"
                                class="rev-star-svg">
                                <linearGradient id="rev_star11" x1="0" x2="100%" y1="0" y2="0">
                                    <stop offset="0" stop-color="#1C1C1C"></stop>
                                    <stop offset="100%" stop-color="#1C1C1C"></stop>
                                </linearGradient>
                                <title id="icon-svg-title-StarBox">Star Box icon</title>
                                <desc id="icon-svg-desc-StarBox">It is an icon with title Star Box</desc>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
                                    fill="url(#rev_star11)"></path>
                            </svg></i>
                    </div>
                    <div class="review-star">
                        <i size="16" color="#1C1C1C"><svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C"
                                width="16" height="16" viewBox="0 0 20 20"
                                aria-labelledby="icon-svg-title-StarBox icon-svg-desc-StarBox" role="img"
                                class="rev-star-svg">
                                <linearGradient id="rev_star12" x1="0" x2="100%" y1="0" y2="0">
                                    <stop offset="0" stop-color="#1C1C1C"></stop>
                                    <stop offset="100%" stop-color="#1C1C1C"></stop>
                                </linearGradient>
                                <title id="icon-svg-title-StarBox">Star Box icon</title>
                                <desc id="icon-svg-desc-StarBox">It is an icon with title Star Box</desc>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
                                    fill="url(#rev_star12)"></path>
                            </svg></i>
                    </div>
                    <div class="review-star">
                        <i size="16" color="#1C1C1C"><svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C"
                                width="16" height="16" viewBox="0 0 20 20"
                                aria-labelledby="icon-svg-title-StarBox icon-svg-desc-StarBox" role="img"
                                class="rev-star-svg">
                                <linearGradient id="rev_star13" x1="0" x2="100%" y1="0" y2="0">
                                    <stop offset="0" stop-color="#1C1C1C"></stop>
                                    <stop offset="100%" stop-color="#1C1C1C"></stop>
                                </linearGradient>
                                <title id="icon-svg-title-StarBox">Star Box icon</title>
                                <desc id="icon-svg-desc-StarBox">It is an icon with title Star Box</desc>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
                                    fill="url(#rev_star13)"></path>
                            </svg></i>
                    </div>
                    <div class="review-star">
                        <i size="16" color="#1C1C1C"><svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C"
                                width="16" height="16" viewBox="0 0 20 20"
                                aria-labelledby="icon-svg-title-StarBox icon-svg-desc-StarBox" role="img"
                                class="rev-star-svg">
                                <linearGradient id="rev_star14" x1="0" x2="100%" y1="0" y2="0">
                                    <stop offset="0" stop-color="#1C1C1C"></stop>
                                    <stop offset="100%" stop-color="#1C1C1C"></stop>
                                </linearGradient>
                                <title id="icon-svg-title-StarBox">Star Box icon</title>
                                <desc id="icon-svg-desc-StarBox">It is an icon with title Star Box</desc>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
                                    fill="url(#rev_star14)"></path>
                            </svg></i>
                    </div>
                    <div class="review-star">
                        <i size="16" color="#1C1C1C"><svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C"
                                width="16" height="16" viewBox="0 0 20 20"
                                aria-labelledby="icon-svg-title-StarBox icon-svg-desc-StarBox" role="img"
                                class="rev-star-svg">
                                <linearGradient id="rev_star15" x1="0" x2="100%" y1="0" y2="0">
                                    <stop offset="0" stop-color="#1C1C1C"></stop>
                                    <stop offset="100%" stop-color="#1C1C1C"></stop>
                                </linearGradient>
                                <title id="icon-svg-title-StarBox">Star Box icon</title>
                                <desc id="icon-svg-desc-StarBox">It is an icon with title Star Box</desc>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
                                    fill="url(#rev_star15)"></path>
                            </svg></i>
                    </div>
                </div>
                <div class="review-number">
                    <p>{{ rev.reviewRating.ratingNum }}</p>
                </div>
            </div>
            <div class="review-time">
                <p>{{ rev.reviewRating.time }}</p>
            </div>
        </div>
        <div class="review-sign">
            <i class="thumb-sign" size="12" color="#50B547">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#50B547" width="12" height="12"
                    viewBox="0 0 20 20" aria-labelledby="icon-svg-title-ThumbUpFill icon-svg-desc-ThumbUpFill"
                    role="img">
                    <linearGradient id="thumb_sign_svg1" x1="0" x2="100%" y1="0" y2="0">
                        <stop offset="0" stop-color="#50B547"></stop>
                        <stop offset="100%" stop-color="#50B547"></stop>
                    </linearGradient>
                    <title id="icon-svg-title-ThumbUpFill">Thumb Up Fill icon</title>
                    <desc id="icon-svg-desc-ThumbUpFill">It is an icon with title Thumb Up Fill</desc>
                    <title>thumb-up-fill</title>
                    <path
                        d="M4.76 18.82c-0.011 0.515-0.425 0.929-0.939 0.94l-0.001 0h-2.86c-0 0-0 0-0 0-0.523 0-0.949-0.418-0.96-0.939l-0-0.001v-10.24c0-0.53 0.43-0.96 0.96-0.96v0h3.8zM19.3 7.5c-0.389-0.51-0.996-0.837-1.679-0.84h-3.581v-2.38c0.002-0.043 0.003-0.094 0.003-0.145 0-2.11-1.71-3.82-3.82-3.82-0.071 0-0.142 0.002-0.213 0.006l0.010-0c-0.001 0-0.003-0-0.004-0-0.369 0-0.674 0.278-0.715 0.637l-0 0.003c-0.275 1.592-0.602 2.946-1.005 4.266l0.065-0.246c-0.436 0.995-1.191 1.783-2.134 2.248l-0.026 0.012v11.18c1.094 0.648 2.374 1.118 3.739 1.332l0.061 0.008h4.52c0.092 0.010 0.198 0.016 0.306 0.016 1.36 0 2.509-0.899 2.888-2.134l0.006-0.021c0.787-1.819 1.508-3.994 2.044-6.241l0.056-0.279c0.116-0.372 0.184-0.8 0.184-1.243 0-0.877-0.263-1.693-0.713-2.373l0.010 0.016z"
                        fill="url(#thumb_sign_svg1)"></path>
                </svg>
            </i>
            <p class="desc-sign">POSITIVE</p>
        </div>
        <div class="review-tags">
            <p class="review-tag" v-for="(tag, ind) in rev.reviewTags" :key="ind">{{ tag }}</p>
        </div>
        <p class="review-text">{{ rev.reviewText }}</p>
        <p class="comment-stats">{{ rev.reviewStats.numLikes }} Likes, {{rev.reviewStats.numComments}} Comments</p>
        <div class="cta">
            <div class="lcs" @click='likeReview'>
                <i class="lcs-symbol" size="16" color="#828282">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#828282" width="16" height="16"
                        viewBox="0 0 20 20" aria-labelledby="icon-svg-title-ThumbUp icon-svg-desc-ThumbUp"
                        role="img" class="lcs-symbol-svg">
                        <linearGradient id="like_sym1" x1="0" x2="100%" y1="0" y2="0">
                            <stop offset="0" stop-color="#828282"></stop>
                            <stop offset="100%" stop-color="#828282"></stop>
                        </linearGradient>
                        <title id="icon-svg-title-ThumbUp">Thumb Up icon</title>
                        <desc id="icon-svg-desc-ThumbUp">It is an icon with title Thumb Up</desc>
                        <title>thumb-up</title>
                        <path
                            d="M19.3 7.5c-0.389-0.51-0.996-0.837-1.679-0.84h-3.581v-2.38c0.002-0.043 0.003-0.094 0.003-0.145 0-2.11-1.71-3.82-3.82-3.82-0.071 0-0.142 0.002-0.213 0.006l0.010-0c-0.001 0-0.003-0-0.004-0-0.369 0-0.674 0.278-0.715 0.637l-0 0.003c-0.275 1.592-0.602 2.946-1.005 4.266l0.065-0.246c-0.642 1.532-2.111 2.598-3.835 2.64l-0.005 0h-3.56c-0.53 0-0.96 0.43-0.96 0.96v0 10.24c0.011 0.522 0.437 0.94 0.96 0.94 0 0 0 0 0 0h3.32c0 0 0 0 0 0 0.523 0 0.949-0.418 0.96-0.939l0-0.001v-0.9c1.38 0.78 3.6 1.84 4.76 1.84h4.52c0.092 0.010 0.198 0.016 0.306 0.016 1.36 0 2.509-0.899 2.888-2.134l0.006-0.021c0.787-1.819 1.508-3.994 2.044-6.241l0.056-0.279c0.116-0.372 0.184-0.8 0.184-1.243 0-0.877-0.263-1.693-0.713-2.373l0.010 0.016zM3.82 18.34h-2.4v-9.3h2.4v9.3zM18.44 10.78c-0.58 2.469-1.28 4.591-2.141 6.628l0.101-0.268c-0.175 0.732-0.823 1.268-1.597 1.268-0.107 0-0.212-0.010-0.313-0.030l0.010 0.002h-4.5c-0.9 0-3.48-1.28-4.76-2.060v-7.32c2.048-0.31 3.719-1.668 4.466-3.502l0.014-0.038c0.328-1.003 0.634-2.242 0.855-3.509l0.025-0.171c1.156 0.207 2.022 1.204 2.022 2.404 0 0.034-0.001 0.067-0.002 0.101l0-0.005v3.1c0 0.398 0.322 0.72 0.72 0.72v0h4.28c0.228 0 0.431 0.109 0.559 0.278l0.001 0.002c0.253 0.427 0.403 0.942 0.403 1.491 0 0.325-0.052 0.637-0.149 0.93l0.006-0.021z"
                            fill="url(#like_sym1)"></path>
                    </svg></i>
                <span class="desc-lcs">Liked</span>
            </div>
            <div class="lcs comment-btn">
                <i class="lcs-symbol" size="16" color="#828282">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#828282" width="16" height="16"
                        viewBox="0 0 20 20" aria-labelledby="icon-svg-title-Chat icon-svg-desc-Chat" role="img"
                        class="lcs-symbol-svg">
                        <linearGradient id="comment_sym_svg1" x1="0" x2="100%" y1="0" y2="0">
                            <stop offset="0" stop-color="#828282"></stop>
                            <stop offset="100%" stop-color="#828282"></stop>
                        </linearGradient>
                        <title id="icon-svg-title-Chat">Chat icon</title>
                        <desc id="icon-svg-desc-Chat">It is an icon with title Chat</desc>
                        <title>chat</title>
                        <path
                            d="M19.8 17.26c-1.347-1.31-2.182-3.139-2.182-5.163 0-0.062 0.001-0.124 0.002-0.186l-0 0.009v-5.26c-0.089-2.78-2.364-5.001-5.158-5.001-0.029 0-0.058 0-0.087 0.001l0.004-0h-7.3c-0.018-0-0.039-0-0.060-0-2.766 0-5.009 2.236-5.020 4.999v6.681c0.022 2.755 2.261 4.98 5.020 4.98 0.021 0 0.042-0 0.063-0l-0.003 0h14.3c0.335-0.009 0.603-0.283 0.603-0.62 0-0.172-0.070-0.328-0.183-0.44l-0-0zM11.98 16.42h-6.9c-0.012 0-0.026 0-0.041 0-1.713 0-3.106-1.372-3.139-3.077l-0-0.003v-6.68c0.034-1.708 1.426-3.080 3.139-3.080 0.014 0 0.029 0 0.043 0l-0.002-0h7.3c0.025-0.001 0.055-0.001 0.085-0.001 1.738 0 3.158 1.359 3.255 3.073l0 0.009v5.26c-0.001 0.038-0.001 0.084-0.001 0.129 0 1.606 0.4 3.118 1.106 4.442l-0.025-0.051zM11.66 6.9h-6.42c-0.467 0.070-0.822 0.469-0.822 0.95s0.354 0.88 0.817 0.949l0.005 0.001h6.42c0.467-0.070 0.822-0.469 0.822-0.95s-0.354-0.88-0.817-0.949l-0.005-0.001zM11.66 10.96h-6.42c-0.467 0.070-0.822 0.469-0.822 0.95s0.354 0.88 0.817 0.949l0.005 0.001h6.42c0.467-0.070 0.822-0.469 0.822-0.95s-0.354-0.88-0.817-0.949l-0.005-0.001z"
                            fill="url(#comment_sym_svg1)"></path>
                    </svg></i>
                <span class="desc-lcs">Comment</span>
            </div>
            <div class="lcs">
                <i class="lcs-symbol" size="16" color="#828282"><svg xmlns="http://www.w3.org/2000/svg"
                        fill="#828282" width="16" height="16" viewBox="0 0 20 20"
                        aria-labelledby="icon-svg-title-Share icon-svg-desc-Share" role="img"
                        class="lcs-symbol-svg">
                        <linearGradient id="share_sym_svg1" x1="0" x2="100%" y1="0" y2="0">
                            <stop offset="0" stop-color="#828282"></stop>
                            <stop offset="100%" stop-color="#828282"></stop>
                        </linearGradient>
                        <title id="icon-svg-title-Share">Share icon</title>
                        <desc id="icon-svg-desc-Share">It is an icon with title Share</desc>
                        <title>share</title>
                        <path
                            d="M0.72 19.94c-0.020 0-0.060 0-0.080 0s-0.060 0-0.080 0v0c-0.32-0.080-0.56-0.36-0.56-0.7 0 0 0 0 0-0.020v0c0-10.1 6.32-12.92 9.52-13.28v-4.34c0 0 0 0 0 0 0-0.38 0.32-0.7 0.72-0.7 0.18 0 0.36 0.060 0.48 0.18v0l9.060 8.32c0.14 0.14 0.22 0.34 0.22 0.54v0c0 0.2-0.1 0.4-0.24 0.52v0l-9.040 8.12c-0.12 0.1-0.3 0.18-0.46 0.18-0.12 0-0.22-0.040-0.32-0.080h0.020c-0.26-0.1-0.44-0.36-0.44-0.64v-4.3c-3.66 0.22-6.74 2.48-8.12 5.66l-0.020 0.060c-0.1 0.28-0.36 0.48-0.66 0.48v0zM10.24 12.32c0.4 0 0.72 0.32 0.72 0.72v0 3.4l7.26-6.5-7.26-6.66v3.32c0 0.4-0.32 0.72-0.72 0.72v0c-2.18 0-7.48 1.7-8.58 9 2.060-2.46 5.14-4 8.56-4 0.020 0 0.020 0 0.020 0v0z"
                            fill="url(#share_sym_svg1)"></path>
                    </svg></i>
                <span class="desc-lcs">Share</span>
            </div>
        </div>
        <div class="comments-section">
            <div class="write-comment">
                <div class="write-comment-icon">
                    <img alt="image"
                        src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C200%3A200&amp;crop=200%3A200%3B%2A%2C%2A"
                        loading="lazy">
                </div>
                <div class="write-comment-input">
                    <textarea placeholder="Write your comment" width="100%" rows="1" tabindex="1" v-model="commentText"></textarea>
                </div>
                <div class="write-comment-btn">
                    <p>Comment</p>
                </div>
            </div>
            <!-- existing comments section -->
            <div class="comments-list">
                <ReviewComment v-for="(comment, ind) in rev.reviewCommentsList" :key="ind" :comment='comment'/>
            </div>
        </div>
    </div>
</template>

<script>
import ReviewComment from './reviewComment';

export default {
    name: 'Review',
    components: {
        ReviewComment,
    },
    props: {
        rev: {
            type: Object,
            required: true,
        }
    },
    computed: {
        id() {
            return 'review-'+ this.rev.num;
        }
    },
    data() {
        return {
            commentText: '',
        }
    },
    methods: {
        likeReview() {
            this.rev.reviewStats.numLikes++;
        }
    },
    mounted() {
        //toggle visibility of comments section of a review
        let elem = document.querySelector(`#${this.id} .cta .comment-btn`);
        let commentsDiv = document.querySelector(`#${this.id} .comments-section`);
        commentsDiv.classList.add('hide-section');
        elem.addEventListener("click", () => {
            commentsDiv.classList.toggle('hide-section');
        });
        // add event listeners to submit comment button
        elem = document.querySelector(`#${this.id} .comments-section .write-comment-btn`);
        elem.addEventListener("click", () => {
            if (this.commentText === '') return;
            let commentObj = {
                num: this.rev.reviewCommentsList.length+1,
                img: 'https://b.zmtcdn.com/data/pictures/chains/5/312995/aa4fc3fc70d8e32772a724d6cbc55ab0_featured_v2.jpg?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A',
                username: 'Biryani by Kilo',
                userTag: 'Management',
                text: this.commentText,
            }
            this.rev.reviewCommentsList.push(commentObj);
            this.rev.reviewStats.numComments++;
            this.commentText = '';
        });
    }
}
</script>

<style scoped>
.hide-section {
    display: none;
}

.review {
    border-bottom: 1px solid rgb(232, 232, 232);
    margin-top: 20px;
    /* display: none; */
}

.profile {
    display: flex;
    justify-content: space-between;
}

.profile-details {
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-pic {
    border-radius: 50%;
    overflow: hidden;
    width: 45px;
    height: 45px;
}

.profile-name {
    margin-left: 10px;
}

.profile-name a {
    text-decoration: none;
}

.profile-name p {
    color: rgb(54, 54, 54);
    font-size: 1.1rem;
    margin: 0px 0px 8px 0px;
}

.profile-stats {
    display: flex;
}

.profile-rev-fol {
    color: rgb(156, 156, 156);
    display: flex;
    align-items: center;
    font-size: 0.95rem;
    font-weight: 100;
}

/* dot before followers */
.followers::before {
    content: "";
    width: 0.4rem;
    height: 0.4rem;
    display: inline-block;
    border-radius: 50%;
    background: rgb(156, 156, 156);
    margin: 0px 5px;
}

.follow-button {
    text-align: center;
    color: #ED5A6B;
    cursor: pointer;
    padding: 1vh 1vw;
    border-radius: 0.6rem;
    background: transparent;
    border: 1px solid #ED5A6B;
}

.review-rating, .stars-and-number {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.review-stars {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
}

.review-star {
    margin: 0px 2px;
}

.review-number {
    color: rgb(54, 54, 54);
    font-weight: 500;
    padding-left: 5px;
}

.review-time {
    padding-left: 10px;
    color: rgb(156, 156, 156);
}

.review-sign {
    display: flex;
    margin: 0px;
    padding-bottom: 10px;
    justify-content: flex-start;
}

.thumb-sign {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: inherit;
}

.desc-sign {
    color: rgb(80, 181, 71);
    padding-left: 5px;
    margin: 0px;
}

.review-tags {
    display: inline-flex;
}

.review-tag {
    color: rgb(130, 130, 130);
    margin: 0px 10px 0px 0px;
    padding: 10px;
    font-size: 0.8rem;
    box-shadow: none;
    border-radius: 20px;
    background: rgb(232, 232, 232);
    font-weight: 100;
}

.review-text {
    color: rgb(105, 105, 105);
    overflow-wrap: break-word;
    padding: 7px 0px;
    margin: 0px;
    font-weight: 100;
}

.comment-stats {
    color: rgb(156, 156, 156);
    margin: 0px;
    padding: 7px 0px;
}

.cta {
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
}

.lcs {
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 5px;
    padding-left: 0%;
    border-radius: 6px;
    margin-right: 40px;
}

.lcs-symbol {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: inherit;
}

.desc-lcs {
    color: rgb(156, 156, 156);
    margin: 0px 0px 0px 5px;
}

.write-comment {
    display: flex;
    margin: 1rem 0px;
    justify-content: space-between;
}

.write-comment-icon {
    width: 45px;
    height: 45px;
    margin-right: 1rem;
    flex-shrink: 0;
    position: relative;
    z-index: -1;
    overflow: hidden;
    border-radius: 50%;
}

.write-comment-icon img {
    filter: brightness(0.95);
    transition: transform 0.4s ease-in-out 0s, filter 0.4s ease 0s;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: none;
    opacity: 1;
    will-change: transform, opacity;
    border-radius: inherit;
}

.write-comment-input {
    -webkit-box-flex: 1;
    flex-grow: 1;
}

.write-comment-input textarea {
    font-size: inherit;
    width: 100%;
    box-sizing: border-box;
    resize: none;
    color: rgb(28, 28, 28);
    padding: 0.8rem 1rem;
    background: rgb(255, 255, 255);
    border-width: 0.1rem;
    border-style: solid;
    border-color: rgb(207, 207, 207);
    outline: none;
    border-radius: 0.6rem;
    overflow: auto;
}

.write-comment-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 10px;
    margin-left: 10px;
    color: rgb(237, 90, 107);
    border-width: 0.1rem;
    border-style: solid;
    border-color: rgb(207, 207, 207);
    outline: none;
    border-radius: 0.6rem;
    cursor: pointer;
}

.write-comment-btn p {
    font-size: 0.8rem;
    margin: 0px;
    padding: 0px;
    line-height: 0.8rem;
}

.comments-list {
    padding-bottom: 10px;
}
</style>