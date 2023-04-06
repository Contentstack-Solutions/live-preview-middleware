# Live-preview-middleware (Anglular & NodeJs)

This middleware lets you preview content from Contentstack in real-time while editing it in the CMS with a BFF (Node JS in this case).


## Steps to follow:

**Contentstack Site:**

1. Go to **Marketplace > Starter** 
2. Install **Angular Starter**
3. Go to **Settings > Live Preview > Enable Live Preview** with proper Environment and Preview url.
Ex: Default Preview Environment: developement, Default Preview URL: http://localhost:3000/
4. To see the live editing in action, go to **Entries > Pages > Home** and make changes. 

**Angular code:**

1. Go to **environmanet.ts** add your base URL for BFF

```
base_url: "http://localhost:5000"
```

**Node JS code:**

1. Refer to the **.env.sample** file, create a new **.env** file, and add your credentials.


