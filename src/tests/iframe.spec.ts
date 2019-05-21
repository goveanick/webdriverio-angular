

describe('iframe::', () => {
    it('complete iframe', ()=>{
        browser.url('https://www.softwareadvice.com/crm/real-estate-crm-comparison/?automated=true');
        const priceBtns = $$('button[data-path*="quote"]');
        // priceBtns[0].moveTo();
        priceBtns[0].click();
        browser.switchToFrame('lightbox_reveal_iframe');

        const companyName = '#$atestconv_hidden test';
        $('#company').setValue(companyName);
        $('#segment>option:nth-child(2)').click();
        $('#size>option:nth-child(2)').click();
        const continueButton = $$('.continue.button.expand');;
        const numberOfButtons1 = continueButton.length;
        for (let i = 0; i < numberOfButtons1; i++) {
            if (continueButton[i].isDisplayed()) {
                continueButton[i].click();
                break;
            }
        }
        $('#firstname').setValue('first');
        $('#lastname').setValue('last')
        $('#email').setValue('test@test123.com');
        $('#step2 form #phone').setValue('5125678901');
        const step2Button =    $$('.submit_conversion.button');
        const numberOfButtons2 =    step2Button.length;
        console.log('## no of buttons : ' + numberOfButtons2);
        for (let j = 0; j < numberOfButtons2; j++) {
            if(step2Button[j].isDisplayed())
            {
                step2Button[j].click();
                break;
            }
        }
        browser.pause(3000);
    });
});
