import tensorflow as tf

model = tf.keras.models.load_model("crop_disease_model.h5")

def predict_disease(image_path):
    img = tf.keras.preprocessing.image.load_img(
        image_path, target_size=(224,224)
    )
    img = tf.keras.preprocessing.image.img_to_array(img)/255.0
    img = img.reshape(1,224,224,3)

    prediction = model.predict(img)
    classes = ["Healthy", "Leaf Curl", "Blight"]

    return classes[prediction.argmax()]
