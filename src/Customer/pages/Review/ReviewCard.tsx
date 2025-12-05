import React from 'react'
import {Avatar, Box, Grid, IconButton, Rating, } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { color } from '../../../data/Filter/color'
import { red } from '@mui/material/colors'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>
        <Grid container spacing={8} >
            <Grid size ={{xs:1}}>
                <Box>
                    <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155FD"}}>
                        Z
                    </Avatar>
                </Box>
            </Grid>

            <Grid>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Ecommerce</p>
                        <p className='opacity-70'>time data</p>
                    </div>
                </div>

                <Rating
                readOnly
                value={4}
                precision={1}
                />
                <p>Value for money product</p>

                <div>
                    <img className='w-24 h-24 object-cover' 
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAvQMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIHAwUGBAj/xABAEAABAwMBBQMICAUDBQAAAAABAAIDBAURMQYHEiFBUXGREyIzYYGhsdEUIzJCQ1KiwRVikrLhJHLwJjU2U4L/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQIDBAUG/8QANBEAAgECBQICCAYCAwAAAAAAAAECAxEEBRIhMUFhMlETIjNxgaGxwSQ0QlKR8BQjQ+Hx/9oADAMBAAIRAxEAPwC8UAIAQAgBACAEAsoCEsjGRuc7QdO1CUrmmEssNbUR1NZK1zuGSINxwhpAGACOhB8Qq73MjcVFNIn9K4T/ANxlJ9cbPkpsyuqP7QNacZNwf7ImpZjVH9pD6WOfFcpiD/Iwfslu41Jfp+pKlqZadjKiWR8lNO/zHSHJjzybz5cne4lQti8kpbJbo28UjXt4grGAyZyhIIAQAgBACAEAIAQAgBACAEAsoA4ggNZc9orPagf4hcaaEj7rnji8NVSU4x5Znp4atV8EWzjLvvds1PxNttLU1rxo4/VMPtPP3LDLExXCOnRyOvPxtL5nk2P3h1m0O0jaWuggghMbnQMZknjHrOvm58EpVnOdmTjssjhaGuLu+p1G3dBW1dhkq7Q7FfTtL4wBkvb95vfgZHrCzVE7Xjyc7Bypqoo1leL/AKii5r5dpjmS41Of5ZCz3BaOqT6npoUcPBWVNfwvuYm3e5MORcasH1Tu+am8vN/yWcKD5hH+EddsA++7Q3plK6qe6hZ59S9wHms7Ae06eJWWlKbdrnNx0MJSp6lC0uli2tqK2K17OXGdzGOZDTPxGdHcsBvtOAtmTtFs4tCDqVoxXLZUtg3p3S3tZFcKZlawYHGHcD8d/MHwWnHEyXJ6KvklKe9N2+aLBs28vZy4hrZal9FKfuVLeH9QyFsRrwfY5FbK8TS6XXY62mq6eqi8rTTRzM/NG4OHuWZNPg58ouLs0ZuIIQGUA0AIAQAgBACARQEJJWxsc+RzWMaMlzjgD2oFd8HLXreNs5actdWfSph+HSt4z46DxWKVaMTfo5biKu+my7nDXbfHWyZbarbFTt6PncXuPsGB8VhliX0R06WSw/5JX9xxt22w2gu4cKy6T+TdnMUbuBmOzAxn2rXlVnLlnWo4DD0leMVc0fr6rGzdUQUCxsLDXm2Xqjrc4EUoLu7Q+4lXpy0yTNfGUfTUJQXVH0hZ6ttTTt4HZaRlpHULqp3PBNPqVfvL2AmgmnvVjiD4HZkqaZurD1c31dSFr1Kdt0dfCYzUlTlz07nCbPWG4bQ3JlDQRtDyOJ8khw1jerj1PsWNR1OyNytVdGOqasfQWzOz9FstaW0lIOJ5PFLK77Uru0/LotqEVFWRwq9eVaWqRxO+C8iK0x25jvrKqQOIB+43n8cLBiZ2jpOlktBzr+kfEfqU8StE9YRyhBmpaypo5fK0dRNTyD78MhYfEKybXBinShUVpq51Nt3l7TUGBJVtq2DHm1DATjvGCs0a81yc6vlWGnulY6+1b5qVxDbta5Yv56Z/GPA4+JWaOIXVHMqZNJezlc7qy7X2O9AC33CF8h/DceB/9J5rNGcZcM5lXC1qPjibwOyrmAkgBACA1F62jtVji8pdK2KDlkMJy53c0c1WU4x5Zmo4erWdoRuVtf8AfE9xdFYKHgHSeq19jR81ryxP7UdmhkvWrL4Irq9bR3e9ycdzuE841EZdhje5o5Ba8pylyzrUcPRo+zjY1WSqmck1VZkiifRQZEMKCyGhIDVAWbuz2ujjEVor5OBzfNge7kHD8ue3s/wt7D1U1pZ5XN8C4Tdamtnz2JbzNtnV8zrHapP9M1wFVMD6U/kH8o69uirXrfoRmynLrL09Ve5fc4o10dtqKKtsctRFUwEOkfIfxOuO1p594KwalFpwOrGjUrKcMTaz4t5d+5a9LvEtlZs8641TxDUQjhmpgcuL+nD2g9vit2NeLjqZ5mrllaFf0UVe/DKg2hu098uctfU8i/zWMzyY0aNH/NSVoVJucrnqcHhY4akqa+JrCqG0yPVSV6gpAj6kRVmMhWMMoiBIOQeYUlOx1Wz23+0Fi4GMrHVNOPwanzxj1HULJGrKJo18BQrbtWfYtPZnelZru5sFdm3VJ6SnMbj6nfNbMa8XycbEZZWpbx3R3ccjZGhzHBzSMgjqsxzjIgPnne5Qmi20qpPO4aljZRnuwceC0K6tM9XlNTVhkvI4tYTpWBSLDa1Q2WjEmoMhJoJUC9hBGESGigyIDogkJqXK6b8mWH0je9OS2yie65TwTwxeQpGU5Y0NeWuJ8o7nl3tWSbT4RqYanUg5a56r7rt2NcVjNxi6IQJCGRIOVJR8hg5UhidqpKsWqFeSDgpMckJSVsNA0Xdumkmptm4xLJI7y0rntD3khrdABnQclvUV6h5bM5J4hpdCyo3cTAVlOeVRv1trnQ2y6MbkML6eU9/nN9nJ3iFq4mPDO7klRapQf98yoFqHogAQJE1BcNVAM4HCw57FZIxzluYAVDMkeCYVTLEDqiD5GByUFrbE4fSN/wBwQi9lc9tfXzXCKMT+T+oAibwMDcgDrjUrJOTkaeFw8KTlo/VueGNodKxpxguA5nA8VVcm1Udotm+qbXankCkucIeXYcJCcRno3nzcM/eHL1K+heZoxxFZeOH/AH37e48QsVW+TEboJGkZD2SAt6/I+CejZdYyla7TXwCa1Q0xEdZXRMnP4bPODcdCdM+7lqp0WW7K/wCS5PVCDaMFdSQ0xiMNVHUte0klgxw88cxlVcUuDNTqSmnqjax4XjIyEITMWiAWqkjkWEKNDAJIABJOgHVA3ZXPoPZSh+hUVJS/+mFrD3gc/fldKKtFI8VWm6lSUvM7SNuGDuVjEafbGyi+7OVtvABkeziiz+cc2+8Kk46otGxha3oK0Z+R8xvYWOLXAhzThwIwQexc3g9umnuhBQWGOaEmaNg1KlIpOSSIzPzyCvwjVu5SsiHQLEb1rIm3RQzLHgBzKBbsn0UF+gmHB5ahCq32Jukc7k45HclwoJPYxHVSVfIyThA+AEjgCASAegKkx2TIueck9VKId7AHktIyhKbcWmAPQqxq3syD2qDLe6IKSBqCGjdbG2/+I7QU0ZbmOI+Vf3N/zhZaUdUjQzCsqWHb89i/7JEcB2F0DyRvwMDCAHaICkt7WyTqKvde6KImkqHZqA0ejf8Am7j8e9aVenZ6kekynG6o+gm91wV/R0NTWyeTpIJJn9jG5x7VrpN8HYqVoUlqm7I6a37A3SfBqXQ0wI+yTxu93L3rPHDTfJzKudUI7QTfyRuot24cPrK6X/5YFlWG7nPnnM3xA47ai0w2a8vooZHyBjGlxfrkjPyWvXWmWlHZy2brU/SSVrmpdqsJ0nySboqsyR4AKQiYUFxDVGRHkHHCISdhAZ5lGVjG4nKURISkqQKlFB4Qi1jqtltlIb9bpKg1EkUjJizDQCCMA/uVsUaWtM4uY46WHrKKV01f5s2M+7S4BmYK2B/YHsLfeMqzwz6Mwwzqn+qL+po7jsVfaEFzqLyzAMl0Dg/3a+5Y5UZx6G7SzPDVdtVn32OfLSHlpBDgcFpHPKxm9qTV+hbG73Z51upPLTtxVVIBcDqxvQLeow0q7PK5livTVNMfCv7/AOFpW6HycQ5c1mOae1ACAwVdPHUwPhmjbJG8EOY4ZBHYVDV0Sm07x5NDFs9S0bBFRU0cEQ0ZG3ARRUdkWqVJ1Japu576e1tZzIUlD2Noo2j7KA+e95AxtxdewPYP0NXNr+0Z7XKVbCQ+P1OX6rEb/UyN0VWZY8AdED4G1GWiHVCOoYyUFhoW4IHVSYnuwAHagSIkDtUmNrcWeiEX6Fm7pudFVsOgnB/SFu4Xws8xni/3R933LbgpY3xgkZW0cQH2+N2jQgNBcNj7ZU3CK4OoozVRk4fjXvHUjoqOnFu9jYjiasabpxlszZUFu8m7JByrmublreEYQEkAIAQCwgDCADogPnfelA6Dbe4F4wJeCRvrHAB8QVza6tUZ7PKZJ4SPa/1OSGqxHQMo0VTPFbA4IS0DUZWIOHVEWkuo28wjJiwKCRjxzUmIloELWIEc1JifJEhSVZZ+6Zp+hVTuhqAP0hbmF8LPMZ77aPu+5cFJ6ILaOIehAIgdiAAAOiAaAEAIAQAgBAI6ICmN+VGI7nbqsNAMkTmOd24PL4laeKW6Z6XIptwnArIarUO+uTK0clUzxQFQTIQ1UlIk8ZCgzNXRD7JU8mLgZ0UFnwQ6qxj6j6IWfBAqTCwKEMtndZG1tkY4avmcXes8h+y38N4DyOcybxVuy/vzLWpRiILYOUZkAIAQAgBACAEAIAQCOiAqfftj6PaR145PgFq4rhHfyLxzKjaFpM9NFGUclQzoZQlkW6qSkVuZOiqZrEXDKlFJK4hohC4InVSUa3H0QnoY3aqxhfIIC2t1MgfZuDrHUOb8D+638M/UPI51HTivei1qf0QWwckyoAQAgBACAEAIAQAgEdEBTm/ScurbXB0Eb3+8LTxT3SPRZDG6nL3FYtC02enihnVQS9mPooJvsNiMmBPooMpFSVI9UKcMTtVKIkHRCCBClGOSEpKFo7pX/wCgqWdlRn9I+S3cL4WeXz1f74vt9y3qU/VBbRxDMgBACAEAIAQAgBACAR0QFFb5pjJtc2LPmxUzBjsJJJ/Zc/Ev1z1+RU0sM5ebOEC1juIDohDBuiCI2qGWgZFBlIHVSY2JAIqSrBCBFSVZEhCjRaO6mIstk0h/EqDjuAH+Vv4Veq2eTzyV8RFeSLcpfRBbJxjOgBACAEAIAQAgBACAR0QFCb3mlu2kxP3oYyPBc7E+M9lkj/C/FnFLXOwHRB0BqMmIxyKhkrZk8qDIRcpRSQgpITBAyJQoIqSGxE4KFLlubrcGxRDqJX/FdDDeA8dnH5r4ItOmGIgtg5ZlQAgBACAEAIAQAgBAI6ICjN9MZbtZFIdH0rPcXfNaGJXrnrchl+Ha7nAlax3GMaKCVwDUYiNQXJZ5IWvsRJypMd7kQhCJIWIFSY2InCko3YjqVJS92WrumlLrXKwn7FSQO7haVvYbwHls7S/yU15fdluUxzEFsHGMqAEAIAQAgBACAEAIBHRAUnvxI/j9DjX6Nz/qWjivEj0+Reyl7yuei1T0HQbdEZaIaFQOGSyhe4Z5KCG9iIViqDqhA1BcRKFWYzklWML3EOSkhbFp7p43NtkrznD6gkescLQt3DL1TyudNPEJdl9WW9S+iC2TjmZACAEAIAQAgBACAEAjogKD3xzmXbORh0igjZjxP7rn4h3mevyWOnCp+bOJ1C1zsA3VGIskQoLtCAQrpJaBC/QiNVJRCOqEPkYUFkRKkpLcNAVJHCI9EKvgt/dcwfwGAjrI/P8AUV0MP4Dx+bv8U/h9C0qcYiCznMMqAEAIAQAgBACAEAIBHQoD563sH/rq4d0f9jVzq/tGeyyj8nH4/U5IaLAdXoIaoVXJNQZgCEg7RCsiLVLKxEdUKskELoQ1QouRO1UiRE6IUfBcO67/AMfp/wDe/wDuK6GH9meOzf8ANv4fQtCn9GFnOaZUAIAQAgBAf//Z" 
                    alt=''/>
                </div>
            </Grid>
        </Grid>
      <div> 
        <IconButton>
            <Delete sx={{color:red[700]}}/>
        </IconButton>
      </div> 
    </div>
  )
}

export default ReviewCard
