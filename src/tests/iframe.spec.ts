describe('iframe::', () => {

        it('complete iframe', ()=>{

            browser.url('https://www.softwareadvice.com/crm/real-estate-crm-comparison/?automated=true')

            let n1 = $$('.product-scores-label.xsmall')
            const numberOfButtons = n1.length;
            for (let i = 0; i < numberOfButtons; i++) {
                n1[i].click()
                if ($$('.product-card-buttons button[data-path*="type=demo"]')[0].isDisplayed()) {
                    $$('.product-card-buttons button[data-path*="type=demo"]')[0].click();
                    break;
                }
            }

            browser.switchToFrame($('#lightbox_reveal_iframe'));
            const companyName = '#$atestconv_hidden ';
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
            const step2Button =    $$('button[type=\'submit\']');
            const numberOfButtons2 =    step2Button.length;
            for (let i = 0; i < numberOfButtons2; i++) {
                if (   step2Button[i].isDisplayed()) {
                    const step2Btn =    step2Button[i];
                    step2Btn.click();
                    break;
                }
            }
            browser.pause(3000);


        });
});




