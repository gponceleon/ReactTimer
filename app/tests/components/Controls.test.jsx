const React = require('react');
const ReactDOM=require('react-dom');
const expect=require('expect');
const $ = require('jQuery');
const TestUtils=require('react-addons-test-utils');

const Controls = require('Controls');

describe('Controls',()=>{
    it('should exist',()=>{
        expect(Controls).toExist();
    });

    describe('render',()=>{
        it('should render Pause when started',()=>{
            let controls = TestUtils.renderIntoDocument(<Controls coutdownStatus="started"/>);
            let $el = $(ReactDOM.findDOMNode(controls));
            let $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        });

        it('should render Start when paused',()=>{
            let controls = TestUtils.renderIntoDocument(<Controls coutdownStatus="paused"/>);
            let $el = $(ReactDOM.findDOMNode(controls));
            let $pauseButton = $el.find('button:contains(Start)');

            expect($pauseButton.length).toBe(1);
        });
    });
});