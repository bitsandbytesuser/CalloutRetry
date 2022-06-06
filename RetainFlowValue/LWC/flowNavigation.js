import { LightningElement, api, track } from 'lwc';
import {
    FlowNavigationNextEvent
} from 'lightning/flowSupport';
 
export default class FlowNavigation extends LightningElement {
    @api availableActions = [];
    @api nextButton;
    @api backButton = false;
    @track backClicked = false;
    @api varBackClicked = false;

    handleBack() {
        // check if BACK is allowed on this screen
        this.backClicked = true;
        this.navigateNext();
    }

    handleNext() {
        // check if NEXT is allowed on this screen
        if (this.availableActions.find((action) => action === 'NEXT')) {
            // navigate to the next screen
            const navigateNextEvent = new FlowNavigationNextEvent();
            this.varBackClicked = false;            
            this.dispatchEvent(navigateNextEvent);
        }
    }

    navigateNext() {
            if (this.availableActions.find((action) => action === 'NEXT')) {
                // navigate to the next screen
                const navigateNextEvent = new FlowNavigationNextEvent();
                if (this.backClicked == true) {
                    this.varBackClicked = true;
                }
                this.dispatchEvent(navigateNextEvent);
            }
    }
}