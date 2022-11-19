---
lang: zh-CN
title: 页面的标题
description: 页面的描述
---

# frontmatter
API
API documentation

If you are going to write plugins, please take a look at Development info.

Syntax extensions
Embedded (enabled by default):

Tables (GFM)
Strikethrough (GFM)
Via plugins:

subscript
superscript
footnote
definition list
abbreviation
emoji
custom container
insert
mark
... and others
Manage rules
By default all rules are enabled, but can be restricted by options. On plugin load all its rules are enabled automatically.

// Activate/deactivate rules, with currying
var md = require('markdown-it')()
            .disable([ 'link', 'image' ])
            .enable([ 'link' ])
            .enable('image');

// Enable everything
md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
});
You can find all rules in sources:

parser_core.js
parser_block.js
parser_inline.js
Benchmark
Here is the result of readme parse at MB Pro Retina 2013 (2.4 GHz):

make benchmark-deps
benchmark/benchmark.js readme

Selected samples: (1 of 28)
 > README

Sample: README.md (7774 bytes)
 > commonmark-reference x 1,222 ops/sec ±0.96% (97 runs sampled)
 > current x 743 ops/sec ±0.84% (97 runs sampled)
 > current-commonmark x 1,568 ops/sec ±0.84% (98 runs sampled)
 > marked x 1,587 ops/sec ±4.31% (93 runs sampled)
Note. CommonMark version runs with simplified link normalizers for more "honest" compare. Difference is ≈1.5×.

As you can see, markdown-it doesn't pay with speed for its flexibility. Slowdown of "full" version caused by additional features not available in other implementations.

markdown-it for enterprise
Available as part of the Tidelift Subscription.

The maintainers of markdown-it and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. Learn more.

Authors
Alex Kocharin github/rlidwka
Vitaly Puzrin github/puzrin
markdown-it is the result of the decision of the authors who contributed to 99% of the Remarkable code to move to a project with the same authorship but new leadership (Vitaly and Alex). It's not a fork.

References / Thanks
Big thanks to John MacFarlane for his work on the CommonMark spec and reference implementations. His work saved us a lot of time during this project's development.

Related Links:

https://github.com/jgm/CommonMark - reference CommonMark implementations in C & JS, also contains latest spec & online demo.
http://talk.commonmark.org - CommonMark forum, good place to collaborate developers' efforts.
Ports

motion-markdown-it - Ruby/RubyMotion
markdown-it-py- Python