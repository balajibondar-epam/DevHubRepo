import { LightningElement,api } from 'lwc';

export default class HelloWorld extends LightningElement {
    //prcessing logic goes here
    //Bugfix-04
    @api childAttribute;
}