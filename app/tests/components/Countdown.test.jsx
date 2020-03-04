const React = require('react');
const ReactDOM=require('react-dom');
const expect=require('expect');
const $ = require('jQuery');
const TestUtils=require('react-addons-test-utils');

const Countdown = require('Countdown');

describe('Countdown',()=>{
    it('should exists',()=>{
        expect(Countdown).toExist();
    });
    
    describe('handleSetCountdown',(done)=>{
        it('should set state to started and countdown',()=>{
            let countdown= TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.coutdownStatus).toBe('started');

            setTimeout(()=>{
                expect(countdown.state.count).toBe(9);
                done();
            },1001)
        });

        it('should never show a negative number',()=>{
            let countdown= TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);
            
            setTimeout(()=>{
                expect(countdown.state.count).notToBe(-2)
                expect(countdown.state.count).toBe(0);
                done();
            },3001)
        });
    });

    it('should pause countdown on pause status',(done)=>{
        let countdown= TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(3);
        countdown.handleOnStatusChange('paused');

        setTimeout(()=>{
            expect(countdown.state.count).toBe(3);
            expect(countdown.state.coutdownStatus).toBe('paused');
            done();
        },1001)
    });

    it('should clear countdown on stop status',(done)=>{
        let countdown= TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(3);
        countdown.handleOnStatusChange('stopped');

        setTimeout(()=>{
            expect(countdown.state.count).toBe(0);
            expect(countdown.state.coutdownStatus).toBe('stopped');
            done();
        },1001)
    });
})