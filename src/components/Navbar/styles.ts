import {
  DropdownButton,
  ListGroup,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  background: #6fcf97; /* Old browsers */
  background: -moz-linear-gradient(
    left,
    #6fcf97 0%,
    #6fcf97 0%,
    #2f80ed 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    #6fcf97 0%,
    #6fcf97 0%,
    #2f80ed 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    #6fcf97 0%,
    #6fcf97 0%,
    #2f80ed 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6fcf97', endColorstr='#2f80ed',GradientType=1 ); /* IE6-9 */
  height: 60px;
  margin-left: -15px !important;
  margin-right: -15px !important;

  a {
    font-size: 12px;
    font-weight: 400;
  }

  .Brand {
    font-size: 22px !important;
    font-weight: 600;
    width: 200px;
  }
`;

export const StyledNavDropdown = styled(NavDropdown)`
  .dropdown-toggle::after {
    display: none;
  }
  .dropdown-toggle::before {
    display: none;
  }
  a {
    color: #707070;
    font-weight: bolder !important;

    :active {
      color: #ffffff;
    }
  }
`;

export const StyledDropdownButton = styled(DropdownButton)`
  .btn-primary {
    background: none;
    border: none;

    ::after {
      content: none;
    }

    :active {
      background: none !important;
      border: none !important;
    }

    :focus {
      background: none !important;
      border: none;

      box-shadow: none;
    }
  }

  :active {
    background: none;
    border: none;
  }
`;

export const StyledNavbarItemDivider = styled(Nav.Item)`
  border-right: 1px solid #ffffff;
  opacity: 0.25;
  margin: -8px;
`;

export const StyledDropdownTitle = styled.span`
  font-weight: bolder;
  font-size: 14px;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

export const StyledDropdownSubtitle = styled.span`
  font-size: 12px;
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
`;

export const StyledTextRole = styled.span`
  font-size: 12px;
  color: #f2994a;
  font-weight: 600;
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
`;

export const StyledNavDropdownItem = styled(NavDropdown.Item)`
  font-size: 14px;
  color: #707070;
  a {
    font-weight: normal !important;
  }
`;

export const StyledNavDropdownItemText = styled(NavDropdown.ItemText)`
  font-size: 14px;
  font-weight: 600 !important;
`;

export const StyledListGroup = styled(ListGroup)`
  overflow: auto;
  height: auto;
  max-height: 200px;
`;

export const StyledNotificationTitle = styled.span`
  font-size: 13px !important;
  font-weight: bolder;
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
`;

export const StyledNotificationMessage = styled.p`
  font-size: 13px !important;
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
`;
