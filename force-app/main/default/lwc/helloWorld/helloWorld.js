import { LightningElement,api } from 'lwc';

export default class HelloWorld extends LightningElement {
    //prcessing logic goes here
    //Bugfix-05
    @api childAttribute;
}