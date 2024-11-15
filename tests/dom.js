import {dom as html} from '../index.js'

const render = X => X.map(x => {
  let r = x.trim()
  let c = r.substr(0, 1)
  return (c != '<' && c != '>' ? ' ' : '')+r
}).join("")

QUnit.test("dom", assert => {
  html(({
    a,
    div,
    form,
    label,
    input,
    select,
    option,
    button,
    span,
    text
  }) => {
    assert.equal(a().outerHTML, '<a></a>')
    assert.equal(input().outerHTML, '<input>')
    assert.equal(a([
      "x"
    ]).outerHTML, '<a></a>')
    assert.equal(a({
      href: 'www.testme.com'
    }).outerHTML, '<a href="www.testme.com"></a>')
    assert.equal(a({
      href: 'www.testme.com'
    }).outerHTML, '<a href="www.testme.com"></a>')
    assert.equal(a({
      href: 'www.testme.com'
    }, [
      text("hello")
    ]).outerHTML, '<a href="www.testme.com">hello</a>')
    assert.equal(a({
      href: 'www.testme.com'
    }, [
      text("<span>")
    ]).outerHTML, '<a href="www.testme.com">&lt;span&gt;</a>')
    assert.equal(a({
      href: 'www.testme.com',
      style: {
        whiteSpace: 'pre-wrap'
      }
    }, [
      text("<span>")
    ]).outerHTML, render([
      '<a',
      '  href="www.testme.com"',
      '  style="white-space: pre-wrap"',
      '>&lt;span&gt;</a>',
    ]))
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
    ]).outerHTML, render([
      '<a',
      '  href="www.testme.com"',
      '  style="white-space: pre-wrap; width: 0"',
      '  disabled=""',
      '  data-bind="3.14"',
      '  king=""',
      '>&lt;span&gt;</a>'
    ]))
    assert.equal(div({}, [
      a({
        href: 'www.testme.com',
        style: {
          whiteSpace: 'pre-wrap'
        }
      }, [null, null])
    ]).outerHTML, render([
      '<div>',
      '  <a',
      '    href="www.testme.com"',
      '    style="white-space: pre-wrap"',
      '  ></a>',
      '</div>'
    ]))
    assert.equal(div({}, [
      a({
        href: 'www.testme.com',
        style: {
          whiteSpace: 'pre-wrap'
        }
      }, [
        text("White Space\nShould not ident\nIn case of user data")
      ])
    ]).outerHTML, render([
      '<div>',
      '  <a',
      '    href="www.testme.com"',
      '    style="white-space: pre-wrap"',
      '  >White Space\nShould not ident\nIn case of user data</a>',
      '</div>'
    ]))
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
    ]).outerHTML, render([
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
    ]))

    const sup = (attrs, html) => div({
      class: 'super'
    }, [
      a(attrs, html)
    ])
    assert.equal(sup({
      href: 'www.testme.com'
    }, [
      text('testme!')
    ]).outerHTML, render([
      '<div class="super">',
      '  <a href="www.testme.com">testme!</a>',
      '</div>'
    ]))

    const hyper = (attrs, html) => div({
      class: 'hyper'
    }, [
      sup(attrs, html)
    ])
    assert.equal(hyper({
      href: 'www.testme.com'
    }, [
      text('testme!')
    ]).outerHTML, render([
      '<div class="hyper">',
      '  <div class="super">',
      '    <a href="www.testme.com">testme!</a>',
      '  </div>',
      '</div>'
    ]))

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
    ]).outerHTML, render([
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
    ]))

    assert.equal(window.TEST_CLICK, null)
    const e = button({
      type: 'button',
      click: (e, index) => {
        e.textContent = 'call e'+index
        window.TEST_CLICK = 1
      }
    }, [
      text('Test me!')
    ])
    const f = button({
      type: 'button',
      onclick: ev => {
        ev.target.textContent = 'call F'
        window.TEST_CLICK++
      }
    }, [
      text('Test me again!')
    ])
    assert.equal(e.outerHTML, '<button type="button">Test me!</button>')
    assert.equal(f.outerHTML, '<button type="button">Test me again!</button>')
    assert.equal(e.textContent, 'Test me!')
    assert.equal(f.textContent, 'Test me again!')
    e.click(1)
    assert.equal(e.textContent, 'call e1')
    assert.equal(f.textContent, 'Test me again!')
    assert.equal(window.TEST_CLICK, 1)
    f.click()
    assert.equal(e.textContent, 'call e1')
    assert.equal(f.textContent, 'call F')
    assert.equal(window.TEST_CLICK, 2)
    f.click()
    assert.equal(e.textContent, 'call e1')
    assert.equal(f.textContent, 'call F')
    assert.equal(window.TEST_CLICK, 3)
    e.click(2)
    assert.equal(e.textContent, 'call e2')
    assert.equal(f.textContent, 'call F')
    assert.equal(window.TEST_CLICK, 1)

    assert.equal(div({}, [
      span({}, [
        text("This")
      ]),
      text("mix"),
      null,
      span({}, [
        text("Tags")
      ]),
      text("with"), 
      span({}, [
        text("array")
      ]),
      null,
      text("and"),
      span({}, [
        text("text")
      ])
    ]).outerHTML, render([
      '<div>',
      '  <span>This</span>mix<span>Tags</span>with<span>array</span>and<span>text</span>',
      '</div>'
    ]))
  })
})
