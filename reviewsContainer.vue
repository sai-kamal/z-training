<template>
    <div class="reviews-container">
        <section id="reviews-left-pane">
            <h4 id='review-head'>Reviews</h4>
            <div class="filter-sort-container">
                <ReviewDropDown v-for="(ddObj, index) in reviewDropDowns"  :key='index' :obj='ddObj'/>
            </div>
            <Reviews />
        </section>
        
        <!-- rating experience sticky box -->
        <RatingExp />
    </div>
</template>

<script>
import Reviews from './reviews';
import ReviewDropDown from './reviewDropDown';
import RatingExp from './ratingExp';
export default {
    name: 'ReviewsContainer',
    components: {
        Reviews,
        ReviewDropDown,
        RatingExp,
    },
    data() {
        return {
            reviewDropDowns: [
            {
                num: 1,
                name: 'filter-dropdown',
                options: ['All Reviews', 'Following', 'Popular', 'Bloggers', 'My Reviews', 'Order Reviews']
            },
            {
                num: 2,
                name: 'sort-dropdown',
                options: ['Newest First', 'Oldest First', 'Highest Rated', 'Lowest Rated']
            }],
        }
    },
    mounted() {
        document.querySelectorAll('.reviews-container a').forEach(item => {
            item.addEventListener('click', event => {
                event.preventDefault();
            });
        });
    },
}
</script>

<style>
@font-face {
    font-family: metropolis;
    src: url(metropolis.regular.otf);
}

.reviews-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.reviews-container * {
    font-family: metropolis, Helvetica, sans-serif;
    box-sizing: border-box;
}

#reviews-left-pane {
    width: 100%;
}

#review-head {
    width: 100%;
    font-size: 1.8rem;
    line-height: 1.6;
    color: rgb(28, 28, 28);
    font-weight: 500;
    margin: 0px;
}

.filter-sort-container {
    display: flex;
    padding-top: 1rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-weight: 100;
    font-size: 1.1rem;
}
</style>