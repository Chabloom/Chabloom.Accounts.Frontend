import React from 'react';
import renderer from 'react-test-renderer';
import Register from "./Register";

test('Render Register component', () => {
    renderer.create(<Register/>);
});
