import productAndReviewsFacetPageObject from '../pageObjects/product-and-reviews-facet-page.object';

describe('product-profile-page : product-page-title-section ::', () => {

    beforeAll(() => {
        browser.url('https://www.softwareadvice.com/crm/hubspot-profile/');
    });
    //
    // // beforeEach(async () => {
    // //     AllureReportService.allureAttachUrlBeforeTestLink(url);
    // // });

    it('should render product logo', () => {
        const el = productAndReviewsFacetPageObject.productLogo;
        expect(el.isDisplayed()).toBe(true, 'Product logo not found');
    });

    it('should render product header', () => {
        const el = productAndReviewsFacetPageObject.productHeader;
        expect(el.isDisplayed()).toBe(true, 'Product header not found');
    });

    it('should display the review stars in the product header and sticky header', () => {
        const expectedStarGroups = 1;
        const starGroups = productAndReviewsFacetPageObject.headerStarGroupsLength();
        expect(starGroups).toEqual(expectedStarGroups, 'Expected ' + expectedStarGroups
            + ' groups of stars in the header. Got ' + starGroups);
    });

    it('should display the review count', () => {
        expect(productAndReviewsFacetPageObject.isReviewCountPresent()).toBe(true, 'Review count not found on url: ' + url);

        // Regex checks for whole numbers separated by the thousands separator

        expect(productAndReviewsFacetPageObject.reviewCountText()).toMatch(
            /^\d{1,3}(,\d{3})*?$/, 'Review count anchor renders unexpected string');
    });
});

