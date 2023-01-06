Element.prototype.renderTemplate = function(_template) {

    if (!window[_template]) {
        window[_template] = document.querySelector(_template).innerHTML;
        document.querySelector(_template).remove();
    }

    let _code = 'let _htmlcode = `let _temp = "";`;\n';
    let _html = window[_template];
        _html = _html.replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#039;/g, "'");

    _html.split('\n').forEach(_line => {
        let _row = _line.trim().replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');

        if (_row.startsWith('@if ')) {
            _row = _row.replace('@if ', 'if ') + ' {';
        } else if (_row.startsWith('@elseif ')) {
            _row = _row.replace('@elseif ', '} else if ') + ' {';
        } else if (_row.startsWith('@else')) {
            _row = _row.replace('@else', '} else {');
        } else if (_row.startsWith('@endif')) {
            _row = _row.replace('@endif', '}');
        } else if (_row.startsWith('@switch ')) {
            _row = _row.replace('@switch ', 'switch ') + ' {';
        } else if (_row.startsWith('@case ')) {
            _row = _row.replace('@case ', 'case ') + ':';
        } else if (_row.startsWith('@break')) {
            _row = _row.replace('@break', 'break;');
        } else if (_row.startsWith('@default')) {
            _row = _row.replace('@default', 'default:');
        } else if (_row.startsWith('@endswitch')) {
            _row = _row.replace('@endswitch', '}');
        } else if (_row.startsWith('@for ')) {
            _row = _row.replace('@for ', 'for ') + ' {';
        } else if (_row.startsWith('@endfor')) {
            _row = _row.replace('@endfor', '}');
        } else if (_row.startsWith('@while ')) {
            _row = _row.replace('@while ', 'while ') + ' {';
        } else if (_row.startsWith('@endwhile')) {
            _row = _row.replace('@endwhile', '}');
        } else {
            _row = _row.replaceAll('{{', '${').replaceAll('}}', '}');
            _row = "_temp += `" + _row + "`;";
        }

        _code += "_htmlcode += '" + _row + "';" + '\n';
    });

    const _output  = eval(eval(_code));
    this.innerHTML = _output;
}
