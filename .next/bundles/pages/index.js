
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(73);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Welcome = __webpack_require__(650);

var _Welcome2 = _interopRequireDefault(_Welcome);

var _Header = __webpack_require__(647);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(646);

var _Footer2 = _interopRequireDefault(_Footer);

var _HighlightGrid = __webpack_require__(648);

var _HighlightGrid2 = _interopRequireDefault(_HighlightGrid);

var _colors = __webpack_require__(545);

var _getMuiTheme = __webpack_require__(561);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = __webpack_require__(627);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactTapEventPlugin = __webpack_require__(654);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _isomorphicUnfetch = __webpack_require__(558);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\pages\\index.js?entry';
/**
 * Created by Adrien on 30/06/2017.
 */


/**
 * Make sure react-tap-event-plugin only gets injected once
 * Needed for material-ui
 */
if (!process.tapEventInjected) {
    (0, _reactTapEventPlugin2.default)();
    process.tapEventInjected = true;
}

var muiTheme = {
    palette: {
        accent1Color: _colors.deepOrange500

        /**
         * Equivalent to the `render` function of React
         * @param props
         * @returns {XML}
         * @constructor
         */
    } };var Index = function Index(props) {
    var userAgent = props.userAgent.userAgent;

    return (
        /** Wrapper around the application to include material-ui **/
        _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: (0, _getMuiTheme2.default)((0, _extends3.default)({ userAgent: userAgent }, muiTheme)), __source: {
                fileName: _jsxFileName,
                lineNumber: 40
            }
        }, _react2.default.createElement('div', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 41
            }
        }, _react2.default.createElement(_Header2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 43
            }
        }), _react2.default.createElement('div', { className: 'container grey100', __source: {
                fileName: _jsxFileName,
                lineNumber: 45
            }
        }, _react2.default.createElement(_Welcome2.default, { title: 'Bienvenue !', msg: 'Voici quelques start-ups mise en avant par Estimeo.', __source: {
                fileName: _jsxFileName,
                lineNumber: 48
            }
        }), _react2.default.createElement(_HighlightGrid2.default, { highlights: props.highlights, __source: {
                fileName: _jsxFileName,
                lineNumber: 51
            }
        }), _react2.default.createElement(_Footer2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 54
            }
        }))))
    );
};

/**
 * Get the initial properties (async) to fill the list of highlights
 * @param context
 * @returns {Promise.<{userAgent: *, highlights: *}>}
 */
Index.getInitialProps = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(context) {
        var userAgent, res, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        /**
                         * Ensures material-ui renders the correct css prefixes server-side
                         */
                        userAgent = void 0;

                        if (process.browser) {
                            userAgent = navigator.userAgent;
                        } else {
                            userAgent = context.req.headers['user-agent'];
                        }

                        /**
                         * Fetch the data
                         */
                        _context.next = 4;
                        return (0, _isomorphicUnfetch2.default)('http://localhost:3000/api/s/all');

                    case 4:
                        res = _context.sent;
                        _context.next = 7;
                        return res.json();

                    case 7:
                        data = _context.sent;

                        console.log('Show data fetched. Count: ' + data.length);

                        /**
                         * List of the properties of this component, which we can access via `props.*`
                         */
                        return _context.abrupt('return', {
                            userAgent: userAgent,
                            highlights: data
                        });

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();

/**
 * Export the component / page
 */
exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57), "?entry"))

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Divider = __webpack_require__(606);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\components\\Footer.js';
/**
 * Created by Adrien on 28/06/2017.
 */


var style = {
    margin: 32,
    textAlign: 'center'
};

var Footer = function Footer() {
    return _react2.default.createElement('div', { style: style, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(_Divider2.default, { inset: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, 'Footer made by someone with love '));
};

exports.default = Footer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\components\\Footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\components\\Footer.js"); } } })();

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\components\\Header.js';
/**
* Created by Adrien on 28/06/2017.
*/

exports.default = function () {
  return _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Estimeo Highlights'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/estimeo-style.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('style', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, '\n        body {\n          font-family: Roboto;\n          background-color: #F5F5F5;\n        }\n      '));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\components\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\components\\Header.js"); } } })();

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(73);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _GridList = __webpack_require__(614);

var _IconButton = __webpack_require__(550);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Subheader = __webpack_require__(619);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _starBorder = __webpack_require__(635);

var _starBorder2 = _interopRequireDefault(_starBorder);

var _StartupCard = __webpack_require__(649);

var _StartupCard2 = _interopRequireDefault(_StartupCard);

var _isomorphicUnfetch = __webpack_require__(558);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\components\\HighlightGrid.js';
/**
 * Created by Adrien on 30/06/2017.
 */


var styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        width: '100%',
        height: 'auto',
        overflowY: 'auto'
    }
};

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */

var HighlightGridList = function HighlightGridList(props) {
    return _react2.default.createElement('div', { style: styles.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, props.highlights.map(function (high) {
        return _react2.default.createElement(_GridList.GridList, {
            cols: 2,
            cellHeight: 'auto',
            style: styles.gridList,
            key: high.periode, __source: {
                fileName: _jsxFileName,
                lineNumber: 33
            }
        }, _react2.default.createElement(_Subheader2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 38
            }
        }, high.periode), high.startups.map(function (tile) {
            return _react2.default.createElement(_GridList.GridTile, {
                cols: tile.size,
                rows: tile.size,
                key: tile.img, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_StartupCard2.default, {
                title: tile.title,
                pretty: tile.pretty,
                author: tile.author,
                avatar: tile.avatar,
                subtitle: tile.subtitle,
                description: tile.description,
                website: tile.website,
                youtubeLink: tile.youtubeLink,
                _id: tile._id,
                img: tile.img,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }));
        }));
    }));
};

HighlightGridList.getInitialProps = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(context) {
        var res, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _isomorphicUnfetch2.default)('/api/s/all');

                    case 2:
                        res = _context.sent;
                        _context.next = 5;
                        return res.json();

                    case 5:
                        data = _context.sent;

                        console.log('Show data fetched. Count: ' + data.length);

                        return _context.abrupt('return', {
                            shows: data
                        });

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();

exports.default = HighlightGridList;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\components\\HighlightGrid.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\components\\HighlightGrid.js"); } } })();

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(604);

var _FlatButton = __webpack_require__(609);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _IconButton = __webpack_require__(550);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _videoLibrary = __webpack_require__(632);

var _videoLibrary2 = _interopRequireDefault(_videoLibrary);

var _link = __webpack_require__(644);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\components\\StartupCard.js';
/**
 * Created by Adrien on 30/06/2017.
 */


var containerImgStyles = {
  'height': '30vh',
  'zIndex': '0'
};

var noContainerImgStyles = {
  'backgroundColor': '#fff',
  'zIndex': '999'
};

var youtubeColor = {
  color: '#c4302b'
};

function handleClick(link) {
  window.open(link, '_blank');
}

var StartupCard = function StartupCard(props) {
  return _react2.default.createElement(_Card.Card, {
    zDepth: 0, __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement(_Card.CardHeader, {
    style: noContainerImgStyles,
    title: props.author,
    subtitle: 'Fondateur(s)',
    avatar: props.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), _react2.default.createElement(_Card.CardMedia, { style: containerImgStyles,
    overlay: _react2.default.createElement(_Card.CardTitle, { title: props.title,
      subtitle: props.subtitle, __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement('img', { src: props.img, alt: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  })), _react2.default.createElement(_Card.CardActions, { style: noContainerImgStyles, __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement(_link2.default, { as: '/s/' + props._id,
    href: '/startup?id=' + props._id, prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, _react2.default.createElement(_FlatButton2.default, { label: 'Voir', __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }))), _react2.default.createElement(_link2.default, { href: props.website, prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement('a', { target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, _react2.default.createElement(_FlatButton2.default, { label: 'Site', __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }))), _react2.default.createElement(_link2.default, { href: props.youtubeLink, prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, _react2.default.createElement('a', { target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, _react2.default.createElement(_FlatButton2.default, {
    label: 'Youtube',
    labelPosition: 'before',
    primary: true,
    icon: _react2.default.createElement(_videoLibrary2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      }
    }),
    style: youtubeColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  })))));
};

exports.default = StartupCard;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\components\\StartupCard.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\components\\StartupCard.js"); } } })();

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\components\\Welcome.js';
/**
 * Created by Adrien on 30/06/2017.
 */


var style = {
    textAlign: 'center'
};

var Welcome = function Welcome(props) {
    return _react2.default.createElement('div', { style: style, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, props.title), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, props.msg));
};

exports.default = Welcome;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\components\\Welcome.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Brase-dev\\OneDrive\\Devops\\TP1_clone\\estimeo-highlights-sample2\\components\\Welcome.js"); } } })();

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(566);


/***/ })

},[665]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MzVkZDQ4ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcz8zNWRkNDhkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzM1ZGQ0OGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IaWdobGlnaHRHcmlkLmpzPzM1ZGQ0OGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdGFydHVwQ2FyZC5qcz8zNWRkNDhkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2VsY29tZS5qcz8zNWRkNDhkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkcmllbiBvbiAzMC8wNi8yMDE3LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgV2VsY29tZSBmcm9tICcuLi9jb21wb25lbnRzL1dlbGNvbWUnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXHJcbmltcG9ydCBIaWdobGlnaHRHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvSGlnaGxpZ2h0R3JpZCdcclxuaW1wb3J0IHtkZWVwT3JhbmdlNTAwfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvY29sb3JzJ1xyXG5pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJ1xyXG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcidcclxuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gJ3JlYWN0LXRhcC1ldmVudC1wbHVnaW4nXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcblxyXG4vKipcclxuICogTWFrZSBzdXJlIHJlYWN0LXRhcC1ldmVudC1wbHVnaW4gb25seSBnZXRzIGluamVjdGVkIG9uY2VcclxuICogTmVlZGVkIGZvciBtYXRlcmlhbC11aVxyXG4gKi9cclxuaWYgKCFwcm9jZXNzLnRhcEV2ZW50SW5qZWN0ZWQpIHtcclxuICAgIGluamVjdFRhcEV2ZW50UGx1Z2luKClcclxuICAgIHByb2Nlc3MudGFwRXZlbnRJbmplY3RlZCA9IHRydWVcclxufVxyXG5cclxuY29uc3QgbXVpVGhlbWUgPSB7XHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgICAgYWNjZW50MUNvbG9yOiBkZWVwT3JhbmdlNTAwXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFcXVpdmFsZW50IHRvIHRoZSBgcmVuZGVyYCBmdW5jdGlvbiBvZiBSZWFjdFxyXG4gKiBAcGFyYW0gcHJvcHNcclxuICogQHJldHVybnMge1hNTH1cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge3VzZXJBZ2VudH0gPSBwcm9wcy51c2VyQWdlbnRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLyoqIFdyYXBwZXIgYXJvdW5kIHRoZSBhcHBsaWNhdGlvbiB0byBpbmNsdWRlIG1hdGVyaWFsLXVpICoqL1xyXG4gICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIG11aVRoZW1lPXtnZXRNdWlUaGVtZSh7dXNlckFnZW50LCAuLi5tdWlUaGVtZX0pfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsvKiogU3BlY2lmeSB0aGUgaGVhZGVyIG9mIHRoZSBhcHBsaWNhdGlvbiAqKi99XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZ3JleTEwMFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyoqIFNwZWNpZnkgdGhlIHdlbGNvbWUgdGl0bGUgLyBtZXNzYWdlICoqL31cclxuICAgICAgICAgICAgICAgICAgICA8V2VsY29tZSB0aXRsZT1cIkJpZW52ZW51ZSAhXCIgbXNnPVwiVm9pY2kgcXVlbHF1ZXMgc3RhcnQtdXBzIG1pc2UgZW4gYXZhbnQgcGFyIEVzdGltZW8uXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyoqIFNwZWNpZnkgdGhlIGxpc3Qgb2YgdGhlIGhpZ2hsaWdodHMgKiovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxIaWdobGlnaHRHcmlkIGhpZ2hsaWdodHM9e3Byb3BzLmhpZ2hsaWdodHN9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiogU3BlY2lmeSB0aGUgZm9vdGVyICoqL31cclxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBpbml0aWFsIHByb3BlcnRpZXMgKGFzeW5jKSB0byBmaWxsIHRoZSBsaXN0IG9mIGhpZ2hsaWdodHNcclxuICogQHBhcmFtIGNvbnRleHRcclxuICogQHJldHVybnMge1Byb21pc2UuPHt1c2VyQWdlbnQ6ICosIGhpZ2hsaWdodHM6ICp9Pn1cclxuICovXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuICAgIC8qKlxyXG4gICAgICogRW5zdXJlcyBtYXRlcmlhbC11aSByZW5kZXJzIHRoZSBjb3JyZWN0IGNzcyBwcmVmaXhlcyBzZXJ2ZXItc2lkZVxyXG4gICAgICovXHJcbiAgICBsZXQgdXNlckFnZW50XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB1c2VyQWdlbnQgPSBjb250ZXh0LnJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J11cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIHRoZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3MvYWxsJylcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdCBvZiB0aGUgcHJvcGVydGllcyBvZiB0aGlzIGNvbXBvbmVudCwgd2hpY2ggd2UgY2FuIGFjY2VzcyB2aWEgYHByb3BzLipgXHJcbiAgICAgKi9cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlckFnZW50OiB1c2VyQWdlbnQsXHJcbiAgICAgICAgaGlnaGxpZ2h0czogZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRXhwb3J0IHRoZSBjb21wb25lbnQgLyBwYWdlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRyaWVuIG9uIDI4LzA2LzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL0RpdmlkZXInO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgICBtYXJnaW46IDMyLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG59O1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgIDxEaXZpZGVyIGluc2V0PXt0cnVlfS8+XHJcbiAgICAgICAgPHA+Rm9vdGVyIG1hZGUgYnkgc29tZW9uZSB3aXRoIGxvdmUgPC9wPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Gb290ZXIuanMiLCIvKipcclxuKiBDcmVhdGVkIGJ5IEFkcmllbiBvbiAyOC8wNi8yMDE3LlxyXG4qL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICA8SGVhZD5cclxuICAgIDx0aXRsZT5Fc3RpbWVvIEhpZ2hsaWdodHM8L3RpdGxlPlxyXG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9jc3MvZXN0aW1lby1zdHlsZS5jc3NcIi8+XHJcbiAgICA8c3R5bGU+e2BcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9IZWFkPlxyXG4gIClcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZHJpZW4gb24gMzAvMDYvMjAxNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7R3JpZExpc3QsIEdyaWRUaWxlfSBmcm9tICdtYXRlcmlhbC11aS9HcmlkTGlzdCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgU3ViaGVhZGVyIGZyb20gJ21hdGVyaWFsLXVpL1N1YmhlYWRlcic7XHJcbmltcG9ydCBTdGFyQm9yZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy90b2dnbGUvc3Rhci1ib3JkZXInO1xyXG5pbXBvcnQgU3RhcnR1cENhcmQgZnJvbSAnLi9TdGFydHVwQ2FyZCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgfSxcclxuICAgIGdyaWRMaXN0OiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBBIHNpbXBsZSBleGFtcGxlIG9mIGEgc2Nyb2xsYWJsZSBgR3JpZExpc3RgIGNvbnRhaW5pbmcgYSBbU3ViaGVhZGVyXSgvIy9jb21wb25lbnRzL3N1YmhlYWRlcikuXHJcbiAqL1xyXG5cclxuY29uc3QgSGlnaGxpZ2h0R3JpZExpc3QgPSAocHJvcHMpID0+IChcclxuXHJcbiAgPGRpdiBzdHlsZT17c3R5bGVzLnJvb3R9PlxyXG4gICAge3Byb3BzLmhpZ2hsaWdodHMubWFwKChoaWdoKSA9PiAoXHJcbiAgICAgIDxHcmlkTGlzdFxyXG4gICAgICAgIGNvbHM9ezJ9XHJcbiAgICAgICAgY2VsbEhlaWdodD1cImF1dG9cIlxyXG4gICAgICAgIHN0eWxlPXtzdHlsZXMuZ3JpZExpc3R9XHJcbiAgICAgICAga2V5PXtoaWdoLnBlcmlvZGV9PlxyXG4gICAgICAgIDxTdWJoZWFkZXI+e2hpZ2gucGVyaW9kZX08L1N1YmhlYWRlcj5cclxuICAgICAgICB7aGlnaC5zdGFydHVwcy5tYXAoKHRpbGUpID0+IChcclxuICAgICAgICAgIDxHcmlkVGlsZVxyXG4gICAgICAgICAgICBjb2xzPXt0aWxlLnNpemV9XHJcbiAgICAgICAgICAgIHJvd3M9e3RpbGUuc2l6ZX1cclxuICAgICAgICAgICAga2V5PXt0aWxlLmltZ30+XHJcbiAgICAgICAgICAgIDxTdGFydHVwQ2FyZFxyXG4gICAgICAgICAgICAgIHRpdGxlPXt0aWxlLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHByZXR0eT17dGlsZS5wcmV0dHl9XHJcbiAgICAgICAgICAgICAgYXV0aG9yPXt0aWxlLmF1dGhvcn1cclxuICAgICAgICAgICAgICBhdmF0YXI9e3RpbGUuYXZhdGFyfVxyXG4gICAgICAgICAgICAgIHN1YnRpdGxlPXt0aWxlLnN1YnRpdGxlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aWxlLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIHdlYnNpdGU9e3RpbGUud2Vic2l0ZX1cclxuICAgICAgICAgICAgICB5b3V0dWJlTGluaz17dGlsZS55b3V0dWJlTGlua31cclxuICAgICAgICAgICAgICBfaWQ9e3RpbGUuX2lkfVxyXG4gICAgICAgICAgICAgIGltZz17dGlsZS5pbWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZFRpbGU+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvR3JpZExpc3Q+XHJcbiAgICApKX1cclxuXHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5IaWdobGlnaHRHcmlkTGlzdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvcy9hbGwnKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93czogZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIaWdobGlnaHRHcmlkTGlzdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IaWdobGlnaHRHcmlkLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRyaWVuIG9uIDMwLzA2LzIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NhcmQsIENhcmRBY3Rpb25zLCBDYXJkSGVhZGVyLCBDYXJkTWVkaWEsIENhcmRUaXRsZSwgQ2FyZFRleHR9IGZyb20gJ21hdGVyaWFsLXVpL0NhcmQnO1xyXG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBWaWRlb0xpYnJhcnkgZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2F2L3ZpZGVvLWxpYnJhcnknO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5cclxuY29uc3QgY29udGFpbmVySW1nU3R5bGVzID0ge1xyXG4gICAgJ2hlaWdodCc6ICczMHZoJyxcclxuICAgICd6SW5kZXgnOiAnMCdcclxufVxyXG5cclxuY29uc3Qgbm9Db250YWluZXJJbWdTdHlsZXMgPSB7XHJcbiAgICAnYmFja2dyb3VuZENvbG9yJzogJyNmZmYnLFxyXG4gICAgJ3pJbmRleCc6ICc5OTknXHJcbn1cclxuXHJcbmNvbnN0IHlvdXR1YmVDb2xvciA9IHtcclxuICAgIGNvbG9yOiAnI2M0MzAyYidcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2xpY2sobGluaykge1xyXG4gICAgd2luZG93Lm9wZW4obGluaywnX2JsYW5rJyk7XHJcbn1cclxuXHJcbmNvbnN0IFN0YXJ0dXBDYXJkID0gKHByb3BzKSA9PiAoXHJcblxyXG4gIDxDYXJkXHJcbiAgICB6RGVwdGg9ezB9PlxyXG4gICAgPENhcmRIZWFkZXJcclxuICAgICAgc3R5bGU9e25vQ29udGFpbmVySW1nU3R5bGVzfVxyXG4gICAgICB0aXRsZT17cHJvcHMuYXV0aG9yfVxyXG4gICAgICBzdWJ0aXRsZT1cIkZvbmRhdGV1cihzKVwiXHJcbiAgICAgIGF2YXRhcj17cHJvcHMuYXZhdGFyfVxyXG4gICAgICAvPlxyXG4gICAgPENhcmRNZWRpYSBzdHlsZT17Y29udGFpbmVySW1nU3R5bGVzfVxyXG4gICAgICBvdmVybGF5PXs8Q2FyZFRpdGxlIHRpdGxlPXtwcm9wcy50aXRsZX1cclxuICAgICAgc3VidGl0bGU9e3Byb3BzLnN1YnRpdGxlfSAvPn1cclxuICAgICAgPlxyXG4gICAgICA8aW1nIHNyYz17cHJvcHMuaW1nfSBhbHQ9XCJcIiAvPlxyXG4gICAgPC9DYXJkTWVkaWE+XHJcbiAgICA8Q2FyZEFjdGlvbnMgc3R5bGU9e25vQ29udGFpbmVySW1nU3R5bGVzfT5cclxuICAgICAgPExpbmsgYXM9e2Avcy8ke3Byb3BzLl9pZH1gfVxyXG4gICAgICAgIGhyZWY9e2Avc3RhcnR1cD9pZD0ke3Byb3BzLl9pZH1gfSBwcmVmZXRjaD5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxGbGF0QnV0dG9uIGxhYmVsPVwiVm9pclwiLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj17cHJvcHMud2Vic2l0ZX0gcHJlZmV0Y2g+XHJcbiAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICA8RmxhdEJ1dHRvbiBsYWJlbD1cIlNpdGVcIi8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLnlvdXR1YmVMaW5rfSBwcmVmZXRjaD5cclxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIDxGbGF0QnV0dG9uXHJcbiAgICAgICAgICAgIGxhYmVsPVwiWW91dHViZVwiXHJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJiZWZvcmVcIlxyXG4gICAgICAgICAgICBwcmltYXJ5PXt0cnVlfVxyXG4gICAgICAgICAgICBpY29uPXs8VmlkZW9MaWJyYXJ5IC8+fVxyXG4gICAgICAgICAgICBzdHlsZT17eW91dHViZUNvbG9yfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9DYXJkQWN0aW9ucz5cclxuXHJcblxyXG4gICAgPC9DYXJkPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhcnR1cENhcmQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU3RhcnR1cENhcmQuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZHJpZW4gb24gMzAvMDYvMjAxNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbn1cclxuXHJcblxyXG5jb25zdCBXZWxjb21lID0gKHByb3BzKSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICAgIDxwPntwcm9wcy5tc2d9PC9wPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvV2VsY29tZS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBYkE7Ozs7O0FBY0E7Ozs7QUFJQTtBQUVBO0FBQUE7OztBQUdBOztBQU1BO0FBQ0E7QUFQQTs7Ozs7O0FBRUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7O0FBRUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFLQTtBQUxBO0FBQUE7O0FBbEJBO0FBQ0E7QUF3QkE7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTs7O0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBR0E7QUFDQTtBQVpBOzs7QUFBQTtBQWNBO0FBQ0E7QUFEQTtBQWRBO0FBQUE7QUFlQTtBQUNBO0FBREE7QUFmQTtBQUNBO0FBZ0JBO0FBQ0E7QUFsQkE7Ozs7QUF3QkE7QUFBQTtBQURBO0FBQ0E7QUF4QkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBOzs7QUErQkE7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFMQTs7Ozs7QUFNQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7OztBQVBBOzs7O0FBTUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQVZBOzs7OztBQVdBOztBQUdBO0FBQ0E7QUFFQTtBQUpBOztBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTkE7QUFDQTtBQVdBOzs7O0FBSUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBS0E7QUFMQTtBQUNBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVZBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFQQTtBQUhBO0FBQ0E7QUFrQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBR0E7QUFDQTs7QUFFQTtBQUFBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFXQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFUQTs7Ozs7QUFXQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBQ0E7QUFHQTtBQUFBO0FBRUE7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7QUFEQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFMQTtBQUFBO0FBQUE7QUFDQTtBQWNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTs7Ozs7O0FBSkE7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        