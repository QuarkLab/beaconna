package com.voidx.beacona.global;

import android.location.Location;

import com.voidx.beacona.model.Item;

import java.util.HashMap;

public class Session {
    public static Location lastCurrentLocation;
    public static HashMap<Integer, Item> userHashMap = new HashMap<>();

    static {
        lastCurrentLocation = new Location("");
        lastCurrentLocation.setLatitude(0.0);
        lastCurrentLocation.setLongitude(0.0);

        Item oshaniItem = new Item(1, "Oshani", "", "Weerakoon", lastCurrentLocation.getLatitude() + 0.0025, lastCurrentLocation.getLongitude() + 0.0039, "");
        Item sumedheItem = new Item(2, "Sumedhe", "", "Dissanayake", lastCurrentLocation.getLatitude() + 0.0004, lastCurrentLocation.getLongitude() + 0.0028, "");
        Item jinadiItem = new Item(3, "Jinadi", "", "Yasiruka", lastCurrentLocation.getLatitude() + 0.0009, lastCurrentLocation.getLongitude() + 0.0050, "");
        Item kavindaItem = new Item(4, "Kavinda", "", "Niroshan", lastCurrentLocation.getLatitude() + 0.0051, lastCurrentLocation.getLongitude() + 0.0005, "");
        Item supulItem = new Item(5, "Supul", "", "Dulanka", lastCurrentLocation.getLatitude() - 0.0030, lastCurrentLocation.getLongitude() + 0.0004, "");

        userHashMap.put(oshaniItem.id, oshaniItem);
        userHashMap.put(sumedheItem.id, sumedheItem);
        userHashMap.put(jinadiItem.id, jinadiItem);
        userHashMap.put(kavindaItem.id, kavindaItem);
        userHashMap.put(supulItem.id, supulItem);
    }
}
