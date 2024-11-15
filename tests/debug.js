import {debug} from '../index.js'

const print = X => JSON.stringify(X, undefined, 2)

QUnit.dump.maxDepth = 20

QUnit.test("debug", assert => {
  debug(({
    a,
    div,
    span,
    form,
    label,
    input,
    select,
    option,
    button,
    text
  }) => {
    assert.deepEqual(a(), {
      tagName: 'a',
      attributes: {},
      children: []
    })
    assert.deepEqual(input(), {
      tagName: 'input',
      attributes: {},
      children: undefined
    })
    assert.deepEqual(a([
      "x"
    ]), {
      tagName: 'a',
      attributes: {},
      children: []
    })
    assert.deepEqual(a({
      href: 'www.testme.com'
    }), {
      tagName: 'a',
      attributes: {
        href: 'www.testme.com'
      },
      children: []
    })
    assert.deepEqual(input({
      value: 'www.testme.com'
    }), {
      tagName: 'input',
      attributes: {
        value: 'www.testme.com'
      },
      children: undefined
    })
    assert.deepEqual(a({
      href: 'www.testme.com'
    }, [
      text("hello")
    ]), {
      tagName: 'a',
      attributes: {
        href: 'www.testme.com'
      },
      children: [
        "hello"
      ]
    })
    assert.deepEqual(input({
      value: 'www.testme.com'
    }, [
      text("hello")
    ]), {
      tagName: 'input',
      attributes: {
        value: 'www.testme.com'
      },
      children: undefined
    })
    assert.deepEqual(a({
      href: 'www.testme.com'
    }, [
      text("<span>")
    ]), {
      tagName: 'a',
      attributes: {
        href: 'www.testme.com'
      },
      children: [
        "<span>"
      ]
    })
    assert.deepEqual(a({
      href: 'www.testme.com'
    }, [
      "<br>"
    ]), {
      tagName: 'a',
      attributes: {
        href: 'www.testme.com'
      },
      children: [
        "<br>"
      ]
    })
    assert.deepEqual(a({
      href: 'www.testme.com',
      style: {
        whiteSpace: 'pre-wrap',
        disabled: true,
        active: null,
        width: 0,
        onBlur: false,
        switch: {},
        array: [],
        king: ''
      },
      class: ['', '', ''],
      disabled: true,
      inactive: false,
      user: null,
      dataBind: 3.14,
      array: ['x'],
      object: {'y': 7},
      king: ''
    }, [
      text("<span>")
    ]), {
      tagName: 'a',
      attributes: {
        href: 'www.testme.com',
        style: 'white-space: pre-wrap; width: 0',
        disabled: '',
        'data-bind': '3.14',
        king: ''
      },
      children: [
        "<span>"
      ]
    })
    assert.deepEqual(div({}, [
      a({
        href: 'https://www.testme.com?q=test',
        style: {
          whiteSpace: 'pre-wrap'
        }
      }, [
        null,
        null
      ])
    ]), {
      tagName: 'div',
      attributes: {},
      children: [
        {
          tagName: 'a',
          attributes: {
            href: 'https://www.testme.com?q=test',
            style: 'white-space: pre-wrap'
          },
          children: []
        }
      ]
    })
    assert.deepEqual(div({}, [
      a({
        href: 'https://www.testme.com?q=test',
        style: {
          whiteSpace: 'pre-wrap'
        }
      }, [
        text("White Space\nShould not ident\nIn case of user data")
      ])
    ]), {
      tagName: 'div',
      attributes: {},
      children: [
        {
          tagName: 'a',
          attributes: {
            href: 'https://www.testme.com?q=test',
            style: 'white-space: pre-wrap'
          },
          children: [
            "White Space\nShould not ident\nIn case of user data"
          ]
        }
      ]
    })

    assert.deepEqual(form({
      class: ['row', 'g-3']
    }, [
      div({
        class: 'col-md-6'
      }, [
        label({
          for: 'inputEmail4',
          class: 'form-label'
        }, [
          text('Email')
        ]),
        input({
          type: 'email',
          class: 'form-control',
          id: "inputEmail4"
        })
      ]),
      div({
        class: 'col-md-6'
      }, [
        label({
          for: 'inputPassword4',
          class: 'form-label'
        }, [
          text('Password')
        ]),
        input({
          type: 'password',
          class: 'form-control',
          id: "inputPassword4"
        })
      ]),
      div({
        class: 'col-12'
      }, [
        label({
          for: 'inputAddress',
          class: 'form-label'
        }, [
          text('Address')
        ]),
        input({
          type: 'text',
          class: 'form-control',
          id: "inputAddress",
          placeholder: "1234 Main St"
        })
      ]),
      div({
        class: 'col-12'
      }, [
        label({
          for: 'inputAddress2',
          class: 'form-label'
        }, [
          text('Address 2')
        ]),
        input({
          type: 'text',
          class: 'form-control',
          id: "inputAddress2",
          placeholder: "Apartment, studio, or floor"
        })
      ]),
      div({
        class: 'col-md-6'
      }, [
        label({
          for: 'inputCity',
          class: 'form-label'
        }, [
          text('City')
        ]),
        input({
          type: 'text',
          class: 'form-control',
          id: "inputCity"
        })
      ]),
      div({
        class: 'col-md-4'
      }, [
        label({
          for: 'inputState',
          class: 'form-label'
        }, [
          text('State')
        ]),
        select({
          id: 'inputState',
          class: 'form-select'
        }, [
          option({
            selected: true
          }, [
            text('Choose...')
          ]),
          option({}, [
            text('...')
          ])
        ])
      ]),
      div({
        class: 'col-md-2'
      }, [
        label({
          for: 'inputZip',
          class: 'form-label'
        }, [
          text('Zip')
        ]),
        input({
          type: 'text',
          class: 'form-control',
          id: 'inputZip'
        })
      ]),
      div({
        class: 'col-12'
      }, [
        div({
          class: 'form-check'
        }, [
          input({
            class: 'form-check-input',
            type: 'checkbox',
            id: "gridCheck"
          }),
          label({
            class: 'form-check-label',
            for: 'gridCheck'
          }, [
            text('Check me out')
          ])
        ])
      ]),
      div({
        class: 'col-12'
      }, [
        button({
          type: 'submit',
          class: ['btn btn-primary']
        }, [
          text('Sign in')
        ])
      ])
    ]), {
      'tagName': 'form',
      'attributes': {
        'class': 'row g-3'
      },
      'children': [
        {
          'tagName': 'div',
          'attributes': {
            'class': 'col-md-6'
          },
          'children': [
            {
              'tagName': 'label',
              'attributes': {
                'for': 'inputEmail4',
                'class': 'form-label'
              },
              'children': [
                'Email'
              ]
            },
            {
              'tagName': 'input',
              'attributes': {
                'type': 'email',
                'class': 'form-control',
                'id': 'inputEmail4'
              },
              children: undefined
            }
          ]
        },
        {
          'tagName': 'div',
          'attributes': {
            'class': 'col-md-6'
          },
          'children': [
            {
              'tagName': 'label',
              'attributes': {
                'for': 'inputPassword4',
                'class': 'form-label'
              },
              'children': [
                'Password'
              ]
            },
            {
              'tagName': 'input',
              'attributes': {
                'type': 'password',
                'class': 'form-control',
                'id': 'inputPassword4'
              },
              children: undefined
            }
          ]
        },
        {
          'tagName': 'div',
          'attributes': {
            'class': 'col-12'
          },
          'children': [
            {
              'tagName': 'label',
              'attributes': {
                'for': 'inputAddress',
                'class': 'form-label'
              },
              'children': [
                'Address'
              ]
            },
            {
              'tagName': 'input',
              'attributes': {
                'type': 'text',
                'class': 'form-control',
                'id': 'inputAddress',
                'placeholder': '1234 Main St'
              },
              children: undefined
            }
          ]
        },
        {
          'tagName': 'div',
          'attributes': {
            'class': 'col-12'
          },
          'children': [
            {
              'tagName': 'label',
              'attributes': {
                'for': 'inputAddress2',
                'class': 'form-label'
              },
              'children': [
                'Address 2'
              ]
            },
            {
              'tagName': 'input',
              'attributes': {
                'type': 'text',
                'class': 'form-control',
                'id': 'inputAddress2',
                'placeholder': 'Apartment, studio, or floor'
              },
              children: undefined
            }
          ]
        },
        {
          'tagName': 'div',
          'attributes': {
            'class': 'col-md-6'
          },
          'children': [
            {
              'tagName': 'label',
              'attributes': {
                'for': 'inputCity',
                'class': 'form-label'
              },
              'children': [
                'City'
              ]
            },
            {
              'tagName': 'input',
              'attributes': {
                'type': 'text',
                'class': 'form-control',
                'id': 'inputCity'
              },
              children: undefined
            }
          ]
        },
        {
          'tagName': 'div',
          'attributes': {
            'class': 'col-md-4'
          },
          'children': [
            {
              'tagName': 'label',
              'attributes': {
                'for': 'inputState',
                'class': 'form-label'
              },
              'children': [
                'State'
              ]
            },
            {
              'tagName': 'select',
              'attributes': {
                'id': 'inputState',
                'class': 'form-select'
              },
              'children': [
                {
                  'tagName': 'option',
                  'attributes': {
                    'selected': ''
                  },
                  'children': [
                    'Choose...'
                  ]
                },
                {
                  'tagName': 'option',
                  'attributes': {},
                  'children': [
                    '...'
                  ]
                }
              ]
            }
          ]
        },
        {
          'tagName': 'div',
          'attributes': {
            'class': 'col-md-2'
          },
          'children': [
            {
              'tagName': 'label',
              'attributes': {
                'for': 'inputZip',
                'class': 'form-label'
              },
              'children': [
                'Zip'
              ]
            },
            {
              'tagName': 'input',
              'attributes': {
                'type': 'text',
                'class': 'form-control',
                'id': 'inputZip'
              },
              children: undefined
            }
          ]
        },
        {
          'tagName': 'div',
          'attributes': {
            'class': 'col-12'
          },
          'children': [
            {
              'tagName': 'div',
              'attributes': {
                'class': 'form-check'
              },
              'children': [
                {
                  'tagName': 'input',
                  'attributes': {
                    'class': 'form-check-input',
                    'type': 'checkbox',
                    'id': 'gridCheck'
                  },
                  children: undefined
                },
                {
                  'tagName': 'label',
                  'attributes': {
                    'class': 'form-check-label',
                    'for': 'gridCheck'
                  },
                  'children': [
                    'Check me out'
                  ]
                }
              ]
            }
          ]
        },
        {
          'tagName': 'div',
          'attributes': {
            'class': 'col-12'
          },
          'children': [
            {
              'tagName': 'button',
              'attributes': {
                'type': 'submit',
                'class': 'btn btn-primary'
              },
              'children': [
                'Sign in'
              ]
            }
          ]
        }
      ]
    })

    const sup = (attrs, html) => div({
      class: 'super'
    }, [
      a(attrs, html)
    ])
    assert.deepEqual(sup({
      href: 'www.testme.com'
    }, [
      text('testme!')
    ]), {
      tagName: 'div',
      attributes: {
        class: 'super'
      },
      children: [
        {
          tagName: 'a',
          attributes: {
            href: 'www.testme.com'
          },
          children: [
            'testme!'
          ]
        }
      ]
    })

    const hyper = (attrs, html) => div({
      class: 'hyper'
    }, [
      sup(attrs, html)
    ])
    assert.deepEqual(hyper({
      href: 'www.testme.com'
    }, [
      text('testme!')
    ]), {
      tagName: 'div',
      attributes: {
        class: 'hyper'
      },
      children: [
        {
          tagName: 'div',
          attributes: {
            class: 'super'
          },
          children: [
            {
              tagName: 'a',
              attributes: {
                href: 'www.testme.com'
              },
              children: [
                'testme!'
              ]
            }
          ]
        }
      ]
    })

    const deep = (attrs, html) => {
      if (attrs.n) {
        attrs.n = parseInt(attrs.n) - 1
        return div({}, [deep(attrs, html)])
      } else {
        return div({}, html)
      }
    }
    assert.deepEqual(deep({
      n: 5
    }, [
      text('Hello')
    ]), {
      tagName: 'div',
      attributes: {},
      children: [
        {
          tagName: 'div',
          attributes: {},
          children: [
            {
              tagName: 'div',
              attributes: {},
              children: [
                {
                  tagName: 'div',
                  attributes: {},
                  children: [
                    {
                      tagName: 'div',
                      attributes: {},
                      children: [
                        {
                          tagName: 'div',
                          attributes: {},
                          children: [
                            text('Hello')
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    })

    assert.deepEqual(div({}, [
      text("This"),
      span({}, [
        text("mix")
      ]),
      null,
      span({}, [
        text("Tags")
      ]),
      span({}, [
        text("with")
      ]), 
      null,
      span({}, [
        text("text")
      ])
    ]), {
      tagName: 'div',
      attributes: {},
      children: [
        'This',
        {
          tagName: 'span',
          attributes: {},
          children: [
            'mix'
          ]
        },
        {
          tagName: 'span',
          attributes: {},
          children: [
            'Tags'
          ]
        },
        {
          tagName: 'span',
          attributes: {},
          children: [
            'with'
          ]
        },
        {
          tagName: 'span',
          attributes: {},
          children: [
            'text'
          ]
        }
      ]
    })
  })
})
