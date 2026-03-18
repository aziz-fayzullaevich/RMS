import {
  Button,
  createTheme,
  FileInput,
  InputBase,
  Modal,
  MultiSelect,
  NumberInput,
  rem,
  Select,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core'
import {
  DateInput,
  DatePickerInput,
  DateTimePicker,
  MonthPickerInput,
  TimeInput,
  YearPickerInput,
} from '@mantine/dates'

export const theme = createTheme({
  fontFamily: 'Arial, san serif',
  breakpoints: {
    xs: '0',
    sm: '30em',
    md: '48em',
    lg: '64em',
    xl: '80em',
  },
  colors: {
    primary: [
      '#F0FFEC',
      '#DAF2D3',
      '#B4E5A6',
      '#8FD97A',
      '#6ACC4D',
      '#4EAE32',
      '#4EAE32',
      '#4EAE32',
      '#4EAE32',
      '#4EAE32',
      '#4EAE32',
    ],
    secondary: [
      '#EFF5FF',
      '#CFE0FB',
      '#A0C1F8',
      '#70A2F4',
      '#4083F0',
      '#1264EB',
      '#1264EB',
      '#1264EB',
      '#1264EB',
      '#1264EB',
      '#1264EB',
    ],
    gray: [
      '#FAFAFA',
      '#F5F5F5',
      '#EEEEEE',
      '#E0E0E0',
      '#BDBDBD',
      '#9E9E9E',
      '#757575',
      '#616161',
      '#424242',
      '#212121',
    ],
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        radius: '8px',
        fw: 600,
        size: 'md',
      },
      vars: (_, props) => {
        if (props.size === 'sm') {
          return {
            root: {
              '--button-height': '36px',
              '--button-padding-x': rem(12),
            },
          }
        }
        if (props.size === 'md') {
          return {
            root: {
              '--button-height': '48px',
              '--button-padding-x': rem(16),
            },
          }
        }

        if (props.size === 'lg') {
          return {
            root: {
              '--button-height': '56px',
              '--button-padding-x': rem(16),
            },
          }
        }

        return { root: {} }
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        radius: '8px',
        size: 'md',
      },

      styles: {
        label: {
          fontWeight: 600,
        },
      },
    }),
    NumberInput: NumberInput.extend({
      defaultProps: {
        radius: '8px',
        size: 'md',
      },

      styles: {
        label: {
          fontWeight: 600,
        },
      },
    }),
    Title: Title.extend({
    }),
    Select: Select.extend({
      defaultProps: {
        size: 'md',
        radius: '8px',
        searchable: true,
        clearable: true,
      },

    }),
    MultiSelect: MultiSelect.extend({
      defaultProps: {
        size: 'md',
        radius: '8px',
        searchable: true,
        clearable: true,
      },
      styles: {
        input: {
          borderRadius: 8,
          fontSize: 16,
          padding: '8px 30px 8px 14px',
          minHeight: 48,
          maxHeight: '100%',
        },
        label: {
          color: 'var(--mantine-color-gray-7)',
          fontWeight: 500,
          fontSize: 14,
          position: 'relative',
        },
        error: {
          fontSize: 12,
        },
        pillsList: {
          width: '100%',
          minHeight: 30,
        },
        required: {
          position: 'absolute',
          right: -11,
          top: 0,
        },
      },
    }),
    DateInput: DateInput.extend({
      styles: {
        input: {
          height: 48,
          borderRadius: 8,
          fontSize: 16,
          padding: '0 14px',
        },
        label: {
          color: 'var(--mantine-color-gray-7)',
          fontWeight: 500,
          fontSize: 14,
        },
        error: {
          fontSize: '12px',
        },
      },
    }),
    DateTimePicker: DateTimePicker.extend({
      styles: {
        input: {
          height: 48,
          borderRadius: 8,
          fontSize: 16,
          padding: '0 14px',
        },
        label: {
          color: 'var(--mantine-color-gray-7)',
          fontWeight: 500,
          fontSize: 14,
        },
        error: {
          fontSize: 12,
        },
      },
    }),
    Modal: Modal.extend({
      styles: {
        content: {
          borderRadius: '16px',
        },
        header: {
          padding: '24px',
        },
        body: {
          padding: '0 24px 24px 24px',
        },
        overlay: {
          background: 'rgba(33, 33, 33, 0.40)',
          backdropFilter: 'blur(5px)',
        },
        title: {
          fontSize: '30px',
          fontWeight: '700',
          color: 'var(--mantine-color-gray-8)',
        },
        close: {
          width: '32px',
          height: '32px',
          borderRadius: '100%',
          backgroundColor: '#B0B0B0',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    }),
    DatePickerInput: DatePickerInput.extend({
      styles: {
        input: {
          height: 48,
          borderRadius: 8,
          fontSize: 16,
          padding: '0 14px',
        },
        label: {
          color: 'var(--mantine-color-gray-7)',
          fontWeight: 500,
          fontSize: 14,
        },
        error: {
          fontSize: 12,
        },
      },
    }),
    MonthPickerInput: MonthPickerInput.extend({
      styles: {
        input: {
          height: 48,
          borderRadius: 8,
          fontSize: 16,
          padding: '0 14px',
        },
        label: {
          color: 'var(--mantine-color-gray-7)',
          fontWeight: 500,
          fontSize: 14,
        },
        error: {
          fontSize: 12,
        },
      },
    }),
    TimeInput: TimeInput.extend({
      styles: {
        input: {
          height: 48,
          borderRadius: 8,
          fontSize: 16,
          padding: '0 14px',
        },
        label: {
          color: 'var(--mantine-color-gray-7)',
          fontWeight: 500,
          fontSize: 14,
        },
        error: {
          fontSize: 12,
        },
      },
    }),
    InputBase: InputBase.extend({
      styles: {
        input: {
          height: 48,
          borderRadius: 8,
          fontSize: 16,
          padding: '0 14px',
        },
        label: {
          color: 'var(--mantine-color-gray-7)',
          fontWeight: 500,
          fontSize: 14,
        },
        error: {
          position: 'absolute',
        },
      },
    }),
    FileInput: FileInput.extend({
      styles: {
        input: {
          height: 48,
          borderRadius: 8,
          fontSize: 16,
          padding: '0 14px',
        },
        label: {
          color: 'var(--mantine-color-gray-7)',
          fontWeight: 500,
          fontSize: 14,
        },
        error: {
          fontSize: 12,
        },
      },
    }),
    YearPickerInput: YearPickerInput.extend({
      styles: {
        input: {
          height: 48,
          borderRadius: 8,
          fontSize: 16,
          padding: '0 14px',
        },
        label: {
          color: 'var(--mantine-color-gray-7)',
          fontWeight: 500,
          fontSize: 14,
        },
        error: {
          fontSize: 12,
        },
      },
    }),
    Textarea: Textarea.extend({
      styles: {
        input: {
          borderRadius: 8,
          fontSize: 16,
          padding: '14px',
        },
        label: {
          color: 'var(--mantine-color-gray-7)',
          fontWeight: 500,
          fontSize: 14,
        },
        error: {
          fontSize: 12,
        },
      },
    }),
  },
})
