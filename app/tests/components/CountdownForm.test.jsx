const React = require('react');
const ReactDOM=require('react-dom');
const expect=require('expect');
const $ = require('jQuery');
const TestUtils=require('react-addons-test-utils');

const CountdownForm = require('CountdownForm');

describe('CountdownForm',()=>{
    it('should exist',()=>{
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown if valid seconds entered',()=>{
        let spy = expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
        const $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value='109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call onSetCountdown if invalid seconds entered',()=>{
        let spy = expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
        const $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value='ab657a';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});