class A {
    private foo: string | undefined = (() => { let i = 'hello world'; return i; })()

    getFoo() {
        // some comment
        // some more comments
        return this.foo ||
            // another one
            'foo bar';
    }
}

module.exports = { A }