import {template} from '../index.js'

QUnit.test("template", assert => {
  template(({
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
    assert.equal(a(), '<a></a>')
    assert.equal(input(), '<input>')
    assert.equal(a([
      "x"
    ]), '<a></a>')
    assert.equal(a({
      href: 'www.testme.com'
    }), '<a href="www.testme.com"></a>')
    assert.equal(input({
      value: 'www.testme.com'
    }), '<input value="www.testme.com">')
    assert.equal(a({
      href: 'www.testme.com'
    }, [
      text("hello")
    ]), '<a href="www.testme.com">hello</a>')
    assert.equal(input({
      value: 'www.testme.com'
    }, [
      text("hello")
    ]), '<input value="www.testme.com">')
    assert.equal(a({
      href: 'www.testme.com'
    }, [
      text("<span>")
    ]), '<a href="www.testme.com">&lt;span&gt;</a>')
    assert.equal(a({
      href: 'www.testme.com'
    }, [
      "<br>"
    ]), [
      '<a href="www.testme.com">',
      '  <br>',
      '</a>'
    ].join('\n'))
    assert.equal(a({
      href: 'https://www.testme.com?q=test',
      style: {
        whiteSpace: 'pre-wrap'
      }
    }, [
      text("<span>")
    ]), [
      '<a',
      '  href="https://www.testme.com?q=test"',
      '  style="white-space: pre-wrap"',
      '>&lt;span&gt;</a>',
    ].join("\n"))
    assert.equal(a({
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
    ]), [
      '<a',
      '  href="www.testme.com"',
      '  style="white-space: pre-wrap; width: 0"',
      '  disabled=""',
      '  data-bind="3.14"',
      '  king=""',
      '>&lt;span&gt;</a>'
    ].join("\n"))
    assert.equal(div({}, [
      a({
        href: 'https://www.testme.com?q=test',
        style: {
          whiteSpace: 'pre-wrap'
        }
      }, [
        null,
        null
      ])
    ]), [
      '<div>',
      '  <a',
      '    href="https://www.testme.com?q=test"',
      '    style="white-space: pre-wrap"',
      '  ></a>',
      '</div>'
    ].join("\n"))
    assert.equal(div({}, [
      a({
        href: 'https://www.testme.com?q=test',
        style: {
          whiteSpace: 'pre-wrap'
        }
      }, [
        text("White Space\nShould not ident\nIn case of user data")
      ])
    ]), [
      '<div>',
      '  <a',
      '    href="https://www.testme.com?q=test"',
      '    style="white-space: pre-wrap"',
      '  >White Space&#10;Should not ident&#10;In case of user data</a>',
      '</div>'
    ].join("\n"))
    assert.equal(form({
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
    ]), [
      '<form class="row g-3">',
      '  <div class="col-md-6">',
      '    <label for="inputEmail4" class="form-label">Email</label>',
      '    <input type="email" class="form-control" id="inputEmail4">',
      '  </div>',
      '  <div class="col-md-6">',
      '    <label for="inputPassword4" class="form-label">Password</label>',
      '    <input',
      '      type="password"',
      '      class="form-control"',
      '      id="inputPassword4"',
      '    >',
      '  </div>',
      '  <div class="col-12">',
      '    <label for="inputAddress" class="form-label">Address</label>',
      '    <input',
      '      type="text"',
      '      class="form-control"',
      '      id="inputAddress"',
      '      placeholder="1234 Main St"',
      '    >',
      '  </div>',
      '  <div class="col-12">',
      '    <label for="inputAddress2" class="form-label">Address 2</label>',
      '    <input',
      '      type="text"',
      '      class="form-control"',
      '      id="inputAddress2"',
      '      placeholder="Apartment, studio, or floor"',
      '    >',
      '  </div>',
      '  <div class="col-md-6">',
      '    <label for="inputCity" class="form-label">City</label>',
      '    <input type="text" class="form-control" id="inputCity">',
      '  </div>',
      '  <div class="col-md-4">',
      '    <label for="inputState" class="form-label">State</label>',
      '    <select id="inputState" class="form-select">',
      '      <option selected="">Choose...</option>',
      '      <option>...</option>',
      '    </select>',
      '  </div>',
      '  <div class="col-md-2">',
      '    <label for="inputZip" class="form-label">Zip</label>',
      '    <input type="text" class="form-control" id="inputZip">',
      '  </div>',
      '  <div class="col-12">',
      '    <div class="form-check">',
      '      <input',
      '        class="form-check-input"',
      '        type="checkbox"',
      '        id="gridCheck"',
      '      >',
      '      <label class="form-check-label" for="gridCheck">Check me out</label>',
      '    </div>',
      '  </div>',
      '  <div class="col-12">',
      '    <button type="submit" class="btn btn-primary">Sign in</button>',
      '  </div>',
      '</form>'
    ].join("\n"))

    const sup = (attrs, html) => div({
      class: 'super'
    }, [
      a(attrs, html)
    ])
    assert.equal(sup({
      href: 'www.testme.com'
    }, [
      text('testme!')
    ]), [
      '<div class="super">',
      '  <a href="www.testme.com">testme!</a>',
      '</div>'
    ].join("\n"))

    const hyper = (attrs, html) => div({
      class: 'hyper'
    }, [
      sup(attrs, html)
    ])
    assert.equal(hyper({
      href: 'www.testme.com'
    }, [
      text('testme!')
    ]), [
      '<div class="hyper">',
      '  <div class="super">',
      '    <a href="www.testme.com">testme!</a>',
      '  </div>',
      '</div>'
    ].join("\n"))

    const deep = (attrs, html) => {
      if (attrs.n) {
        attrs.n = parseInt(attrs.n) - 1
        return div({}, [deep(attrs, html)])
      } else {
        return div({}, html)
      }
    }
    assert.equal(deep({
      n: 5
    }, [
      text('Hello')
    ]), [
      '<div>',
      '  <div>',
      '    <div>',
      '      <div>',
      '        <div>',
      '          <div>Hello</div>',
      '        </div>',
      '      </div>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join("\n"))

    assert.equal(div({}, [
      span({}, [
        text("This")
      ]),
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
      span({}, [
        text("array")
      ]),
      null,
      span({}, [
        text("and")
      ]),
      span({}, [
        text("text")
      ])
    ]), [
      '<div>',
      '  <span>This</span>',
      '  <span>mix</span>',
      '  <span>Tags</span>',
      '  <span>with</span>',
      '  <span>array</span>',
      '  <span>and</span>',
      '  <span>text</span>',
      '</div>'
    ].join('\n'))
  })
})
