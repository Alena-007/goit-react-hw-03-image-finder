import styled from 'styled-components';

export const ImageItem = styled.li`
  border-radius: ${p => p.theme.radii.md};
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  border-radius: ${p => p.theme.radii.md};
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;