package com.voidx.beacona.global;

import android.location.Location;

import com.voidx.beacona.model.Item;

import java.util.HashMap;

public class Session {
    public static Location lastCurrentLocation;
    public static HashMap<Integer, Item> itemHashMap = new HashMap<>();

    static {
        lastCurrentLocation = new Location("");
        lastCurrentLocation.setLatitude(0.0);
        lastCurrentLocation.setLongitude(0.0);

        Item oshaniItem = new Item(1, "Oshani", "", "Weerakoon", lastCurrentLocation.getLatitude() + 0.0025, lastCurrentLocation.getLongitude() + 0.0039, "");
        Item sumedheItem = new Item(2, "Sumedhe", "", "Dissanayake", lastCurrentLocation.getLatitude() + 0.0004, lastCurrentLocation.getLongitude() + 0.0028, "");
        Item jinadiItem = new Item(3, "Jinadi", "", "Yasiruka", lastCurrentLocation.getLatitude() + 0.0009, lastCurrentLocation.getLongitude() + 0.0050, "");
        Item kavindaItem = new Item(4, "Kavinda", "", "Niroshan", lastCurrentLocation.getLatitude() + 0.0051, lastCurrentLocation.getLongitude() + 0.0005, "");
        Item supulItem = new Item(5, "Supul", "", "Dulanka", 6.918281, 79.862596, "");

        itemHashMap.put(oshaniItem.id, oshaniItem);
        itemHashMap.put(sumedheItem.id, sumedheItem);
        itemHashMap.put(jinadiItem.id, jinadiItem);
        itemHashMap.put(kavindaItem.id, kavindaItem);
        itemHashMap.put(supulItem.id, supulItem);
    }
}
