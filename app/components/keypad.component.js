import React from 'react'

class Keypad extends React.Component {
  render () {
    const _ac = (<button type='button' onClick={this.keyAC}>AC</button>)
    const _c = (<button type='button' onClick={this.keyC}>C</button>)
    const _pm = (<button type='button' onClick={this.keyPM}>{'\u00B1'}</button>)
    const _opDiv = (<button type='button' onClick={this.keyOpDiv}>/</button>)
    const _opMut = (<button type='button' onClick={this.keyOpMut}>*</button>)
    const _opSub = (<button type='button' onClick={this.keyOpSub}>-</button>)
    const _opAdd = (<button type='button' onClick={this.keyOpAdd}>+</button>)
    const _dot = (<button type='button' onClick={this.keyDot}>.</button>)
    const _ret = (<button type='button' onClick={this.keyRet}>{'\u21B5'}</button>)
    const _0 = (<button type='button' onClick={this.key0}>0</button>)
    const _1 = (<button type='button' onClick={this.key1}>1</button>)
    const _2 = (<button type='button' onClick={this.key2}>2</button>)
    const _3 = (<button type='button' onClick={this.key3}>3</button>)
    const _4 = (<button type='button' onClick={this.key4}>4</button>)
    const _5 = (<button type='button' onClick={this.key5}>5</button>)
    const _6 = (<button type='button' onClick={this.key6}>6</button>)
    const _7 = (<button type='button' onClick={this.key7}>7</button>)
    const _8 = (<button type='button' onClick={this.key8}>8</button>)
    const _9 = (<button type='button' onClick={this.key9}>9</button>)

    return (
      <div className='keypad'>
        <table>
        <tbody>
          <tr>
            <td>{_ac}</td>
            <td>{_c}</td>
            <td>{_pm}</td>
            <td>{_opDiv}</td>
          </tr>
          <tr>
            <td>{_7}</td>
            <td>{_8}</td>
            <td>{_9}</td>
            <td>{_opMut}</td>
          </tr>
          <tr>
            <td>{_4}</td>
            <td>{_5}</td>
            <td>{_6}</td>
            <td>{_opSub}</td>
          </tr>
          <tr>
            <td>{_1}</td>
            <td>{_2}</td>
            <td>{_3}</td>
            <td>{_opAdd}</td>
          </tr>
          <tr>
            <td colSpan='2'>{_0}</td>
            <td>{_dot}</td>
            <td>{_ret}</td>
          </tr>
        </tbody>
        </table>
      </div>
    )
  }
}

export default Keypad
