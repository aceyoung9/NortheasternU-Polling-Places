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
        <Autocomplete
          items={Object.keys(dorms)}
          getItemValue={item => item}
          renderItem={(item, isHighlighted) => (
            <div
              style={{ background: isHighlighted ? 'lightgray' : 'white' }}
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
        />
      </Layout>
    )
  }
}

export default IndexPage
