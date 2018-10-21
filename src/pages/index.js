import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'

import Layout from '../components/layout'

import dorms from '../data/nuDorms'

class IndexPage extends Component {
  state = { value: '' }

  render() {
    let { value } = this.state

    return (
      <Layout>
        <form className="form-inline justify-content-center">
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="dormInput" className='sr-only'>Dorm Name</label>

            <Autocomplete
              items={Object.keys(dorms)}
              getItemValue={item => item}
              renderItem={(item, isHighlighted) => (
                <div
                  style={{ background: isHighlighted ? 'lightgray' : '#555' }}
                  key={item}
                >
                  {item}
                </div>
              )}
              value={value}
              shouldItemRender={(item, value) =>
                item.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              onChange={e => this.setState({ value: e.target.value })}
              onSelect={val => this.setState({ value: val })}
              inputProps={{
                id: 'dormInput',
                className: 'form-control form-control-lg',
                placeholder: 'Type in your dorm name...'
              }}
              menuStyle={{
                borderRadius: '6px',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                background: 'rgba(255, 255, 255, 0.9)',
                fontSize: '90%',
                position: 'fixed',
                overflow: 'auto',
                maxHeight: '30%',
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </form>
      </Layout>
    )
  }
}

export default IndexPage
