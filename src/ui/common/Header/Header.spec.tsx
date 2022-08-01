import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';
import { langs } from '@/translate/data';

const logout = jest.fn();
const changeLang = jest.fn();

describe('Header', () => {
  it('renders a heading', () => {
    render(<Header
      isLogin={true}
      logout={logout}
      langs={langs}
      lang="en"
      changeLang={changeLang}
    />)

    const heading = screen.getByText(/Header/i)

    expect(heading).toBeInTheDocument()
  })
})
