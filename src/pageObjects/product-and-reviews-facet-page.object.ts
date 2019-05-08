

class ProductAndReviewsFacetPageObject {

    get headerStarGroups()                      { return $$('app-detail-bar .new-stars'); }

    get reviewCountInTitleSection()             { return $('.rank-text a'); }

    public  headerStarGroupsLength() {
        return  this.headerStarGroups.length;
    }
//
    public isReviewCountPresent() {
        return this.reviewCountInTitleSection.isDisplayed();
    }

    public reviewCountText() {
        console.log($('.rank-text a').isDisplayed())
        console.log($('.rank-text a').getHTML())
        return $('.reviews-empty a').getText();
    }

}

export default new ProductAndReviewsFacetPageObject();
