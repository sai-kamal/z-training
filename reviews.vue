<template>
    <section>
        <div class="detailed-reviews">
            <Review v-for="(rev, index) in reviewsList" :key='index' :rev='rev'/>
        </div>
        <div class="pagination">
            <div class="page-btn" id="rev-prev-page-btn" @click="reviewsPrevPage">
                <a href="#" class="arrow">
                    <i class="prev-arrow" color="#1C1C1C" size="20"><svg xmlns="http://www.w3.org/2000/svg"
                                fill="#1C1C1C" width="20" height="20" viewBox="0 0 20 20"
                                aria-labelledby="icon-svg-title-ChevronLeft icon-svg-desc-ChevronLeft" role="img"
                                class="arrow-svg">
                                <linearGradient id="left-arrow" x1="0" x2="100%" y1="0" y2="0">
                                    <stop offset="0" stop-color="#1C1C1C"></stop>
                                    <stop offset="100%" stop-color="#1C1C1C"></stop>
                                </linearGradient>
                                <title id="icon-svg-title-ChevronLeft">Chevron Left icon</title>
                                <desc id="icon-svg-desc-ChevronLeft">It is an icon with title Chevron Left</desc>
                                <title>chevron-left</title>
                                <path
                                    d="M13.040 4.88c0.28 0.3 0.28 0.78 0 1.060l-4.48 4.48 4.48 4.46c0.28 0.3 0.28 0.78 0 1.060s-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060l5-5c0.28-0.28 0.76-0.28 1.060 0z"
                                    fill="url(#left-arrow)"></path>
                            </svg></i>
                </a>
            </div>
            <div class="page-num" @click="reviewsNumPage(1)">
                <a href="#"><span>1</span></a>
            </div>
            <div class="page-num" @click="reviewsNumPage(2)">
                <a href="#"><span>2</span></a>
            </div>
            <div class="page-btn" id="rev-next-page-btn" @click="reviewsNextPage">
                <a href="#" class="arrow">
                    <i class="next-arrow" color="#1C1C1C" size="20"><svg xmlns="http://www.w3.org/2000/svg"
                            fill="#1C1C1C" width="20" height="20" viewBox="0 0 20 20"
                            aria-labelledby="icon-svg-title-ChevronRight icon-svg-desc-ChevronRight" role="img"
                            class="arrow-svg">
                            <linearGradient id="right-arrow" x1="0" x2="100%" y1="0" y2="0">
                                <stop offset="0" stop-color="#1C1C1C"></stop>
                                <stop offset="100%" stop-color="#1C1C1C"></stop>
                            </linearGradient>
                            <title id="icon-svg-title-ChevronRight">Chevron Right icon</title>
                            <desc id="icon-svg-desc-ChevronRight">It is an icon with title Chevron Right</desc>
                            <title>chevron-right</title>
                            <path
                                d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"
                                fill="url(#right-arrow)"></path>
                        </svg></i>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import Review from './review';

export default {
    name: 'Reviews',
    components: {
        Review,
    },
    data() {
        return {
            reviewsList: [{
                num: 1,
                profile: {
                    img: 'https://b.zmtcdn.com/data/user_profile_pictures/3e8/b0000c8d0003578f54e63141373fe3e8.jpg?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A',
                    name: 'Ajay Kanojiya 1',
                    numReviews: 1,
                    numFollowers: 0,
                },
                reviewRating: {
                    ratingNum: 5.0,
                    time: '5 hours ago',
                },
                reviewTags: ['biryani', 'delicious food'],
                reviewText: 'Great taste 👍👍',
                reviewStats: {
                    numLikes: 0,
                    numComments: 0,
                },
                reviewCommentsList: [{
                    num: 1,
                    img: 'https://b.zmtcdn.com/data/pictures/chains/5/312995/aa4fc3fc70d8e32772a724d6cbc55ab0_featured_v2.jpg?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A',
                    username: 'Biryani by Kilo',
                    userTag: 'Management',
                    text: 'Come on man, this is great. Everyone has to try this once in their life. Hoping it survives the corona period',
                }
                ],
            },
            {
                num: 2,
                profile: {
                    img: 'https://b.zmtcdn.com/data/user_profile_pictures/3e8/b0000c8d0003578f54e63141373fe3e8.jpg?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A',
                    name: 'Ajay Kanojiya 2',
                    numReviews: 1,
                    numFollowers: 0,
                },
                reviewRating: {
                    ratingNum: 5.0,
                    time: '5 hours ago',
                },
                reviewTags: ['biryani', 'delicious food'],
                reviewText: 'Great taste 👍👍',
                reviewStats: {
                    numLikes: 0,
                    numComments: 0,
                },
                reviewCommentsList: [{
                    num: 1,
                    img: 'https://b.zmtcdn.com/data/pictures/chains/5/312995/aa4fc3fc70d8e32772a724d6cbc55ab0_featured_v2.jpg?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A',
                    username: 'Biryani by Kilo',
                    userTag: 'Management',
                    text: 'Come on man, this is great. Everyone has to try this once in their life. Hoping it survives the corona period',
                }
                ],
            },
            {
                num: 3,
                profile: {
                    img: 'https://b.zmtcdn.com/data/user_profile_pictures/3e8/b0000c8d0003578f54e63141373fe3e8.jpg?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A',
                    name: 'Ajay Kanojiya 3',
                    numReviews: 1,
                    numFollowers: 0,
                },
                reviewRating: {
                    ratingNum: 5.0,
                    time: '5 hours ago',
                },
                reviewTags: ['biryani', 'delicious food'],
                reviewText: 'Great taste 👍👍',
                reviewStats: {
                    numLikes: 0,
                    numComments: 0,
                },
                reviewCommentsList: [{
                    num: 1,
                    img: 'https://b.zmtcdn.com/data/pictures/chains/5/312995/aa4fc3fc70d8e32772a724d6cbc55ab0_featured_v2.jpg?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A',
                    username: 'Biryani by Kilo',
                    userTag: 'Management',
                    text: 'Come on man, this is great. Everyone has to try this once in their life. Hoping it survives the corona period',
                }
                ],
            }],
            curPage: 1,
            list: [1, 2, 3],
            curList: [],
            reviewsPerPage: 2,
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.list.length / this.reviewsPerPage);
        },
    },
    methods: {
        HideReviews() {
            for (let revNum of this.list) {
                let elem = document.getElementById('review-' + revNum);
                elem.style.display = "none";
            }
        },
        checkPageButtons() {
            let prevButton = document.getElementById("rev-prev-page-btn");
            let nextButton = document.getElementById("rev-next-page-btn");
            if (this.curPage === 1) prevButton.style.visibility = "hidden";
            else prevButton.style.visibility = "visible";
            if (this.curPage === this.totalPages) nextButton.style.visibility = "hidden";
            else nextButton.style.visibility = "visible";
        },
        loadReviews() {
            this.HideReviews();
            let start = (this.curPage - 1) * this.reviewsPerPage;
            this.curList = this.list.slice(start, start + this.reviewsPerPage);
            for (let revNum of this.curList) {
                let elem = document.getElementById('review-' + revNum);
                elem.style.display = "block";
            }
            this.checkPageButtons();
        },
        reviewsNextPage() {
            this.curPage = Math.min(this.totalPages, this.curPage + 1);
            this.loadReviews();
        },
        //loads prev page of reviews
        reviewsPrevPage() {
            this.curPage = Math.max(1, this.curPage - 1);
            this.loadReviews();
        },
        // loads the exact num page
        reviewsNumPage(num) {
            this.curPage = num;
            this.loadReviews();
        },
    },
    mounted() {
        this.loadReviews();
    }
}
</script>

<style scoped>
.detailed-reviews {
    margin-top: 20px;
}

.pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 2vh;
}

.pagination div {
    margin: 0.5vw;
}

.arrow {
    box-sizing: border-box;
    position: relative;
    z-index: -1;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 2vw;
    height: 2vw;
    text-decoration: none;
    border-radius: 50%;
    border-width: 0.2rem;
    border-style: solid;
    border-color: rgb(17, 145, 153);
    border-image: initial;
}

.page-btn {
    cursor: pointer;
}

.prev-arrow, .next-arrow {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: inherit
}

.page-num {
    cursor: pointer;
}

.page-num > a {
    text-decoration: none;
}

.arrow-svg {
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    width: 20px;
    height: 20px;
}
</style>