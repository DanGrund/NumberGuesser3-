import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import Application from '../lib/Components/Application';
import Input from '../lib/Components/Input';
import NewRange from '../lib/Components/NewRange';
import Output from '../lib/Components/Output';
import GuessCounter from '../lib/Components/GuessCounter';
import PreviousGuesses from '../lib/Components/PreviousGuesses';
import Score from '../lib/Components/Score';


describe('<Application/>', ()=>{
  it('should render an Input component', ()=>{
    const wrapper = shallow(<Application/>)
    const Input = wrapper.find('Input')
    expect(Input).to.have.length(1);
  })

  it('should render an Output component', ()=>{
    const wrapper = shallow(<Application/>)
    const Output = wrapper.find('Output')
    expect(Output).to.have.length(1);
  })

  it('should render an GuessCounter component', ()=>{
    const wrapper = shallow(<Application/>)
    const GuessCounter = wrapper.find('GuessCounter')
    expect(GuessCounter).to.have.length(1);
  })

  it('should render an Score component', ()=>{
    const wrapper = shallow(<Application/>)
    const Score = wrapper.find('Score')
    expect(Score).to.have.length(1);
  })

})

describe('<Input/>', ()=>{
  it('should render an Input field', ()=>{
    const wrapper = shallow(<Input/>)
    expect(wrapper.find('.numberInput')).to.have.length(1);

  })

  it('should render an Sumbit button', ()=>{
    const wrapper = shallow(<Input/>)
    expect(wrapper.find('.submit')).to.have.length(1);
  })

  it('should render an Clear button', ()=>{
    const wrapper = shallow(<Input/>)
    expect(wrapper.find('.clear')).to.have.length(1);
  })

  it('should render an Reset button', ()=>{
    const wrapper = shallow(<Input/>)
    expect(wrapper.find('.reset')).to.have.length(1);
  })

  it('should render an NewRange component', ()=>{
    const wrapper = shallow(<Input/>)
    const NewRange = wrapper.find('NewRange')
    expect(NewRange).to.have.length(1);
  })

})

describe('<NewRange/>', ()=>{
  it('should render an new min input', ()=>{
    const wrapper = shallow(<NewRange/>)
    expect(wrapper.find('.new-min')).to.have.length(1);
  })

  it('should render an new max input', ()=>{
    const wrapper = shallow(<NewRange/>)
    expect(wrapper.find('.new-max')).to.have.length(1);
  })

  it('should render an new range button', ()=>{
    const wrapper = shallow(<NewRange/>)
    expect(wrapper.find('.new-range')).to.have.length(1);
  })
})

describe('<Output/>', ()=>{
  it('should render an guess output', ()=>{
    const wrapper = shallow(<Output/>)
    expect(wrapper.find('.guess-output')).to.have.length(1);
  })

  it('should render an hint output', ()=>{
    const wrapper = shallow(<Output/>)
    expect(wrapper.find('.hint')).to.have.length(1);
  })

})

describe('<Score/>', ()=>{
  it('should render an scoring div', ()=>{
    const wrapper = shallow(<Score/>)
    expect(wrapper.find('.scoring')).to.have.length(1);
  })
})

describe('<GuessCounter/>', ()=>{
  it('should render an guess count output', ()=>{
    const wrapper = shallow(<GuessCounter/>)
    expect(wrapper.find('.guess-count')).to.have.length(1);
  })

  it('should render an show guesses button', ()=>{
    const wrapper = shallow(<GuessCounter/>)
    expect(wrapper.find('.show-guesses')).to.have.length(1);
  })
})

describe('<PreviousGuesses/>', ()=>{
  it.skip('should render a list of previous guesses', ()=>{
    const wrapper = shallow(<PreviousGuesses/>)
    expect(wrapper.find('.guess-list')).to.have.length(1);
  })
})
