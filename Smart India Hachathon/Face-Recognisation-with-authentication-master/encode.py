import face_recognition
import pickle
import glob,os
import cv2
import numpy as np

all_encodings = {}
i = 0

for filename in glob.iglob('knwon_images/**', recursive=False):
    print(filename)

    image = face_recognition.load_image_file(filename)
    # face_locations = face_recognition.face_locations(image)
    # print(face_locations)
    encoding  = face_recognition.face_encodings(image)
    # face_landmarks_list = face_recognition.face_landmarks(image)
    # print (face_locations)
    if len(encoding) > 0:
        # roll = os.path.split(filename)[1].split("/")[0].split(".")[0]
        roll = int(os.path.split(filename)[1].split(".")[0])
        all_encodings[roll] = encoding[0]
    else:
        print("Face not detected")
        i=i+1


with open('all_encodings', 'wb') as config_dictionary_file:
    pickle.dump(all_encodings, config_dictionary_file)

if(i==0):
    print("Encoding Done Successfully..!!")
else:
    print("\n\t\t\tEncoding Done but "+str(i)+" face didn't found..!!\n")
    