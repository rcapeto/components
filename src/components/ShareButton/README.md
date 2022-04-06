# Component [ShareButton]


## 🚀 How to use

### ShareButton
```jsx
    import { ShareButton } from './components/ShareButton';

    const Example: FunctionComponent = () => {
        return (
            <ShareButton
                textButton='Compartilhar'
                message='Confira só isso'
                colorPrimary='#fff'
                backgroundPrimary='#000'
                colorSecondary='#000'
                backgroundSecondary='#dcdde0'
            />
        );
    };

```

## 💻 Documentation

### ShareButton props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `textButton`  | `string` | Button text | `Navigation Button`|
| `message`  | `string` | Message share | `Navigation Button`|
| `colorPrimary`  | `string` | Font color button | `#fff`|
| `backgroundPrimary`  | `string` | Background color button | `#000`|
| `colorSecondary`  | `string` | Color icons | `#000`|
| `backgroundSecondary`  | `string` | Background color icons | `#000`|
| `items`  | `Item[]` | Collection of share items | `[]`|

### Item props
| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `title`  | `string` | Text of title attribute `required` | `Navigation Button`|
| `type`  | `IconType` | Icon type `required` | `itemType`|
| `active`  | `boleean` | Collection of share items `required`| - |

- IconType: `whatsapp`, `facebook`, `twitter`, `pinterest`, `email`, `telegram` or `linkedin`
## 🔖 Layout

<p align="center">
    

https://user-images.githubusercontent.com/15270961/157363574-3ad5183e-1694-429f-bbb9-0ca8c036f369.mov
    

</p>

## 👨🏻‍💻 Developers
- Gabriel Cintra


