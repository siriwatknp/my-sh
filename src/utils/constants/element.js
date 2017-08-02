
export const mapSize = (size) => {
  switch (size) {
    case 'sm':
      return 'is-small';
    case 'md':
      return 'is-medium';
    case 'lg':
      return 'is-large';
    default:
      return '';
  }
}

export const mapLabelSize = (size) => {
  switch (size) {
    case 'sm':
      return 'is-small';
    case 'md':
      return 'is-medium';
    case 'lg':
      return 'is-large';
    default:
      return 'is-normal';
  }
}

export const mapIconSize = (size) => {
  switch (size) {
    case 'sm':
      return 'is-small';
    case 'md':
      return '';
    case 'lg':
      return 'is-medium';
    default:
      return 'is-small';
  }
}

export const mapStatus = (status) => {
  switch (status) {
    case 'info':
      return 'is-info';
    case 'success':
      return 'is-success';
    case 'primary':
      return 'is-primary';
    case 'danger':
      return 'is-danger';
    case 'warning':
      return 'is-warning';
    default:
      return '';
  }
}

