# VK-JSX

## Simple jsx to vk-keyboard(json) compiler with ***custom fabric*** & ***async functional components*** & ***redux-like actions***

### It is still in development, i need to create algoritmh to: 
- resolve all promises in keyboard tree 
- unpack functional components

couse my json right now look like: 
```json
{
    type: 'menu',
    content: Promise{[
        Promise{ 
            {
                type: 'fucntional',
                content: Promise{
                    {
                        type: 'row',
                        content: Promise{
                            {
                                type: 'button',
                                content: {(color, text, action)}
                            }
                        }
                    }
                }
            },
        },
    ]}
}
```
and needed to look lile: 
```json
{
    type: 'menu',
    content: [
        {
            type: 'row',
            content: [
                {
                    type: 'button',
                    content: {(color, text, action)}
                }
            ]
        },
    ]
}