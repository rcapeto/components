# Component [ShareButton]


## 🚀 How to use

### ShareButton
```jsx
    import { BannerCountdoun } from './components/BannerCountdoun';



    const setting: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const array: ContentBannerProps[] = [
        {
            image: 'https://www.pngkey.com/png/full/541-5416886_darkness.png',
            alt: 'darkness',
            title: 'Darkness',
            countdown:{
            text:'Oferta termina em :',
            countdownUse:true,
            dataInit:'2022-02-17T08:00:00.000Z',
            dataFinish:'2022-02-24T03:46:00.000Z'
            }
        },
    ];
    const Example: FunctionComponent = () => {

        return (
            <BannerCountdoun
            sliderSettings={setting}
            contents={array}
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
| `type`  | `IconType` | Icon type `required` | `IconType`|
| `active`  | `boleean` | Collection of share items `required`| - |

- IconType: `whatsapp`, `facebook`, `twitter`, `pinterest`, `email`, `telegram` or `linkedin`
## 🔖 Layout

<p align="center">
    

https://user-images.githubusercontent.com/15270961/157363574-3ad5183e-1694-429f-bbb9-0ca8c036f369.mov
    

</p>

## 👨🏻‍💻 Developers
- Gabriel Cintra


