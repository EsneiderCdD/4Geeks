import { useState, useEffect } from "react";

const images = [
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_nmxFKUd1XKM0QyNZh4h6j3UJYQKIXmveg&s", title: "Tu alimentación es importante" },
  { src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSEhIVFhUVFRUVFRcXFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0iHyUtLS0tLS0tLS0wLS0tLS0rLS0tLS0tLS0tLS0tLS0uLS0rLS0tLS0tLSstKy0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xAA4EAACAQMBBgMGAwkBAQEAAAAAAQIDBBEhBRIxQVFhBnGREyIygbHwQqHhBxQjM1JiwdHxgpJD/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJhEBAAICAgICAgIDAQAAAAAAAAECAxEhMRJBBBMyUhRhcZGhIv/aAAwDAQACEQMRAD8A9jQaGQ6NMiQ+RkDJ5AkyISGIGYw7BAQhhwHSDGSFJgDJkNSQU5Mr1JlENWRXZJJgMBkGgB0waSIIBMfeAIRXq3HJcfoWaWqAFgEskBuoAJEciaSIpACRzDAmURDg5HQDjMcZogRNbfEiFE1vxA1YvQQoLRCAsoJDIFy9ACb9Aox6jRiSEDDMcFgMxhCAQ6QkEgHIpMkZDN4AaroilWZNUkv9FSpPLLtTMBsTZHOokAYMqqRVqXHQrylkqbXneIiqXeeCKjkWbaj+KQNnp0JcXj1NG3T547LJVVXXCQUJNhNtFr7++BG0R0yXJF2jkiGZOyGYUBFMlI5hEA6GY6KHJaUE9WRDLJFG4atLXBJbcQJSXBcPqSWnxCUayEFgQEyFGA6DQCHEMRTAsJgsIYQh0A6QQyQmwBkyvVmHUkZ91WLoBXroqSuEVK1VtkY0bWKlwyGUgcgtlQWQJSGbJKVPmwo7ak28lvCIt8khPQglUehJqRUp54Fe6v6NP+bVhBL+qSX1EzEdrEb6XYym+DSXV6+iJ6cZPi8/kc0/GezIyxK6p/nhfPGDVsdu21x/JuaNTtCpGT+aTyItE9Sk1mO4ajh2IKiGU32Hc2+JdJtERzJpU+mpDMioWJCY4CYIYLQDosWnxLzK6J7bj8wNkQMZCAsoJDIIkqQzHBYDMEdjBCCSGQaARHNkkivVkFV7iZj3lUvXdzFcWZFS7o5zlv8A9yS9E0jFsta9t1xWt0jEWKe26K/DH0X+S/S29Sa4R9EZ/kVa/j3Y7I8mvWvKU+MY+iT9UU50ocYvHnqixmrKThtCBRS48QlNkFapuvD4v70Oe214uhRqK3pJ1riWihHhHTLdSXCKS1fbtqdPKNbY8Z6dNKtg53a3jayoZjKtFyX4Ye88/I5faUbu6l7OpWnJvGaVGDVNZxhN5zP5m74b/ZzTj/EuVGEI5e6lFyk+/JLsee2f1WHo/j65tLJvv2i1JRaopU4vROfxt9oxy/oc5e0L+vrKUlvarehJaeZ6Xc3dpavfo2lPTRTkk5/Jte78jH2j4iq1M1FTU4rWUU3vJLi1xyee0+U7nmXorXUajiHm914cv1ruuXdPP5GPUdanLE4tNdVqvI9x2PWp3NNVKfDg0+MXzTXUs3vhijXju1IJ/LVd0zUZPUwxbHHcS8+8FftEr0JRhWlKrSbw1J704rrGT1+R7jY7SoVaaqU5KUZLKweB+JvCjs6m8k3Tb4/7Nrwl4xpUI+yfDPHkv9nox5Nf4efJj/29jnfpcEQSuN56pfI52z2/Cqlu4w+jzk2Ldpe83l8ux3iduExMLXsJPVIDAPt2+BYSzx4lTaIbBLKm13Iwpkie3REkT26ILqYhREBpIcZDkUzBY7BYQwhDpAEkEMh2FRTZUrvQs1TNuq6RUYW1KnIwrqSjxLW3towi95PPJ/4ZyN1tKVWeFwXH/B87NE+T6eCY8Wt7fJdtkZllRb4m7Z0Dg9MzwsUoF2jQCtqBo0qR0rDhaVSvYxnBwlnDTWU8NZXGLXB9zxK3tZ7P2nUtpxlPfWISjFuUlNpxk0ufFPvk+gIUzk/GLVKcJpLelFrOFnTvx/E/LL6s6+Wocojdo0GylStIucnmrJcW03H+3PN9ytLbFSs91ZUfqYtCnOrLrnidFY2CgcvKXbwiJ3LK8R7GqVqElTeJcUu61Mnwq4zozlNqNWk92pDnnrj+l/7O4lta3gmnNZXJatenA5u+pRuZuVKnibW7vrKbXR448n8je40mp3tT8FUJ0ryoo/yqmuOUZLg/Pij0lUjn9ibH/dqac5avjk6G1rQqRzGSeNNDVee3O/HTJ8TbOjVoTi1n3Xjs8cT5zp092Uo8lJp9cp8F3PpvalaMKcpSeEk2/I+Z51nKrKqliPtJPtjLf35mq+3K/UOt8K3M4yST0yt314HqtnPKXM8r8HJ1anuxe6nyX0PX9k2z5rHbmenFHDhlmJlcoUWXKdNdCWlSS5E24zo5K3sRpUUy3GkO6aGzTNnQa7hUC5ukcqXNFTY4sQkIitNCENJkUmAM/MXAIcOKBQaCnGY7IatTAgR3FTBxfjG6lGG/Hhwkly7m9tO9UU22cZfXlStJrhHp18zGTLFHTHiteeHO/wASr5PrzL+ztkKPL9fM17awXQ1KFt2PDkyTeeX0MeOuOOFG2sjVt7fGNCxRtvv/AAXadLH3+XqZrQvkDQpFqEBkhpVDrHDjM7SNnnvju+U7iFOLz7OOvaUsPHol6noFKk5cdI/mzz3a/hKdvUlVjUdWlKeXKXxwcnwk/wASzz/6W9LeO1xXr562l2JS3Y72DPltKvTrS33vUpzxHTDg3wjlcujOn2VbJrBBtHZKTkmswmsPqu5yrD01mvlqXI3+zK/tU4SxGclJ6Jpx4ST6f7R3mwpUXQjKnKM9Pii00+6a4mb4b1c6FTVwTWesXjDXTKfqa+y7OnR/hU1iCzp3lq2biNSmWfTldtbW37mVvhqUYKS/u1w8eWY+pQ2VcV7K5jUeXQryUJr+ib0WnLX/ACS+NaNWnfUJ2tH2tfLzCKaluNbrbecQXDV6aG/sjwTWqwxf1FJb6n7OGVHMdY78uMn1SwvM3THMzuHnvkiI1LJ8a3ta6pytbKEqs5Pdm4Y3YLnvVH7qfbOexytl+y27mkritClFf/nTTm/nJ4Sfqe11ralb01CnGMeSSSWA6dvGcU2tfQ9FMUV7eXJl8uunNeGfD1O3Sp0qeEljK4+bkdRQt8fpqyenRSWCeEDq5I4xS5BKOSTdCSCA3SKcSyDuhUDRAvQszZFMIjENgRplpAS4hAyRholLAK/4LISAeCDGQ0mFDUmZt5XwizXqGLf1DNrahqlfKWPtKbm8EdtaJEyp5eS3TgfPtbyl9KseMagNOiWqdMZRLEY44FiGbSkgsaff/A98hyRVanLm+RvmeIY1EcymnXwFb05zeVHPd6L9Q7XZ7eHPC6J6v0NaFFcMv6fQ9FMOuZee+XfEKn7q/wAUs9lwJ61rBwlGSzGScWuz4lhUscMEEryGd3OXqnjXGOp24cY3PTEWx3Rw4Scqff4o+fXzFXqRfE1t9xeVquZh3+wlUqe1hVmqePeprCw+bzyXY4Xxfq9FM2/yZVy7ajUdw2otxUHrpLD093m+Rf2LTr1W5KLpwecSl/Mlr8ShyXd+hfj4YtFUhW9mnUjHGW20ujUW8b3HXibNPEfIlME73Zb/ACNxqv8A1HaWVOn8K956yk9W+7fMXtklKTehHXulrl4X1MqvWlVe7Hgeh5p57PGTqzy+HI26cNOhDZWu4u5cSKgUh2gkhwBig8CFkBEU9RSn3Iq9eME5SkopLVvRJdWAUupVqVkY+0NvU6qlToT3npmpBpwjrlre646cM8iGxtJLXOM4zzb82Zi0TOobnHMV3PDXdYRAqXdiOjk3BCGMypBIZBogTIqkg5MgqSCqlzMwr2rqal9VwjBlls8me/p7fj4/aSkWoRI6FItcDzVeiRQQ+8V3V1wtX0RoWmzpS1nounM60rNunK9orzKk7iO9u516JNv0RftqCzvPOeWFwXmW6VlGKLkKSSPZTHFYeO+SbK9PHR/MmjNj45MjuKsacXKXBHRzLaFxuU284eMLzfAx9lRbms+b+/Mp3e1HXkowTUFrrxb79DO2ttuVvOMN3MZxy2niScXy01Wp5r5I8t+nrpit469y7KdN7unFa/oY1XbNHeag06ieJRi00n/d0MG82u7iEoTlJQksOMZOLx03otM57ZewKNtLMN+UM53c5flnml6+ZfviZ4Z/j2jt6Rsi7jLfk57zcsy8+UUuSSHryqSlnecVwSS5d31OZntqNOOIU2t5fE1iK/XzHo+K8xxCDk0uLeE2u508o9uXhO+HRw2fl5k2/Nmhb0Yx4I4+28U1vxUtPT6kz8RV5cKcF5tv6D7aQv03l2W8OpI4xbTuZPWeO0YpL88k0alV6ucvV/RGfvq19Fvbrt8eMjmacZc2/VkywuI+7+j6f7bkq8Vxa9SKrfQXDUw6l7Bc8votf+A1KVxUj7sowzw91z/yh9kz1B9UR3LUqXjlw08jKvrSlUTVRKSaw97VNd8io7PqYxKo3LqkkvTAoWT5yz8sEmtrdtRatOpNbUIaKKwkXoUyvSp7rNClHKO9aRWNQ82S82ncot0RY3BFYXRxh0ZaOghAtgR1GVasy1KRUuKTfAlo4ar2xNo1tcFSmiW9ptS1RAp4Pm5Jmbcvp49RXhLWuZR0gsvqyqpVspyeVzS0z8y5TmuZZUYtGYiWt69LmzL+h8KjuS78/wD0a6a5HKVrdCt7qrT+GWnR6o9dPka4tDy3+PvmsurSDyzFt9v/ANdP5rX8i/S2pRl+NLs9D0VyVnqXmtitXuFqb0yzjfE211UqKjCeVFb00uvCKfz+ht7b2xSpwcd5OUliMc6v9Dg6Fq4uU3xm8vHRcFr5nLNk1God/j49z5S6LY1PTJzfjq4iqtGPNKbfk3HH0Z1WyJrcPO/E8nO9qZ/CoxXljOPVs8t5/wDL1Y/zWbe4ZejX7mNRZetuJyiXeYW4ym3jXBct7TIdthmta00bjcuU6hVpWZZp2ZowpIeUoo3pz8kFK3J0kivUu0jOd7UrPdoR3v73pTXz/F5L1RY54hJj3LRudowhhZ46Jc2+iXMj/dqtbD3t1c4835tcPkPs3YSg9+T3pvjKXHyil8K7I2adPd4M9FMP7PPfNEfipWtooLG6vQvUqiWmCWM1zCcYvod4rEPPNpnsMdeGo04dgowSYcmaZUpwLdovdZFIntlxKyLAghEVMgkCgkRREc2E2Q1GAE5EeWRVJS6ZBhUfRoCWpFSWJLJm3OyIvWEsPo+BqwqLqKdWPYzalbdw3W9q9S5ava1afxReOq1QNK57nRTuF3KVxQpT4xXmtH+R5rfF/WXpr8r9oUlcIdTiBW2XH8M5L0ZlXNtcp/w1v/JxOU4bx6dq5aT7bGYjbsWY9vs+/n8ShT825P8AI1LTZFRfHV/+Y4+rEYrz6JyUj2P93iw4bPg+OCytkS5VM+aGq2dSEXL4kunE19Vo7hj7az1I40oxWh5TtS2uVWqVJ0p4lOUk0t5Yzpw14YPUaO9Lk/nyClbxXQ39PlHLMZvCeHlVG6i9M6+j+ZdoVV1O2v8AYtCr8dNPvhZ9TAu/BlPjTqTpvz3l6M5z8e0dOsfKiewWc3k6myqrdOXt/DV8n/DrQa6yg19GX14du2sTu2uu5BL0bbFcV4notmpMdta+2rSgsyml5sz/AN/qVl/Bptr+qXux+XN+hYsvC1CElJpzl/VN77+WeB0VC0iuR1jBM/k42zxH4uYtdlSlrXlv/wBuMQX/AJ5/M3aNGKx9EaKjFcg1JdDvXHFenntkm3aCNR8ogulJ8i17bsM67NuYIQnjWISi+gSrsJVWA0Yt8hppokVQUqxSVZMs0VoV6iT1JreejXMrKTIwkIip0PkZCZFNJkbWUPN8h0tPv7YEcUM4BRDkgIdxDOC6DuQooCGduivO3NFgOAGW6bQ8XgvypIglR7ADGt1DSjICVq+IVOm0wJqccEjWjEohpAZ04IDc6ItSiPogu1ZWrfEJW9NdySVQjT6IG0imuSIWkSqLC9m+eAiLe7DxqNZJdxc/vsFHCAh3pBqEmSe0BcmAvZMdUwd4dMAnAUYjoLJQ26RzDbBccgkCJFAjSLkI5S8jTJkxBKIiCTJHOpyEIy0UFyJsaCEBA+IWBCASpjNDiASiPuCEAlTEqa+/vyEIBpQb0AdNCEUkaQ+6OIIp1IakbgIRFNhDqQhAJ1CN1H9/kIQBLIsCEASHkhCAYdIQgDiwkxCAGeAN/AhFhD468WaFJe6hCLJBYEIRlX//2Q==", title: "Descansa bien para recuperar energía" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDJ-wd9gTsrWHd9C3ccWmh-wMKTCQMuWn2w&s", title: "El ejercicio te ayuda" }
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "16rem",
      width: "100%",
      backgroundColor: "#E6D5B8",
      overflow: "hidden"
    }}>
      {images.map((img, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "16rem",
            height: "16rem",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#C2A385",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
            left: i === 0 ? "10%" : i === 1 ? "35%" : "60%",
            transform: `translateY(${i === index ? "0" : "50px"})`,
            opacity: i === index ? 1 : 0,
          }}
        >
          <img src={img.src} alt={img.title} style={{
            width: "12rem",
            height: "12rem",
            borderRadius: "50%",
            objectFit: "cover"
          }} />
          <p style={{
            marginTop: "0.5rem",
            fontSize: "1.125rem",
            color: "#4A2C2A",
            fontWeight: "600",
            textAlign: "center"
          }}>{img.title}</p>
        </div>
      ))}
    </div>
  );
}
