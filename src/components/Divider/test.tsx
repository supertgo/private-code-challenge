import { renderWithTheme } from 'utils/tests/helper';

import { Divider } from '.';

describe('<Divider />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Divider />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin: 5.6rem auto 3.2rem;
        height: 1rem;
        background: rgba(84,84,212,0.34);
        border: 0;
      }

      <hr
        class="c0"
      />
    `);
  });
});
